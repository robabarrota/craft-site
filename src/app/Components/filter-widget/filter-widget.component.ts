import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { Product } from '../shop-page/Product';

@Component({
  selector: 'app-filter-widget',
  templateUrl: './filter-widget.component.html',
  styleUrls: ['./filter-widget.component.scss']
})
export class FilterWidgetComponent implements OnInit, OnChanges {

  filterMaterialBoxes = new Map<string, boolean>();

  @Input() totalProducts: Product[] = [];
  @Output() productsFiltered = new EventEmitter<Product[]>();

  constructor() { }

  ngOnInit() {
    this.updateFilterBoxes();
  }

  ngOnChanges() {
    this.updateFilterBoxes();
  }

  updateFilterBoxes(){
    this.filterMaterialBoxes.clear();
    this.totalProducts.forEach((item, index) => {
      if (!this.filterMaterialBoxes.has(item.material))
        this.filterMaterialBoxes.set(item.material, false);
    });
    this.sortFilters();
    this.applyFilter();
  }

  sortFilters() {
    const sortedList: any = {};
    Object.keys(this.filterMaterialBoxes)
      .sort() // or pass a custom compareFn there, faster than using .reverse()
      .reverse()
      .forEach(x => sortedList[x] = this.filterMaterialBoxes[x])
    return sortedList;
  }

  toggleFilter(filter: any, event: any) {
    this.filterMaterialBoxes.set(filter.key, event.checked);
    this.applyFilter();
  }

  applyFilter() {
    var filterChecked = false;
    this.filterMaterialBoxes.forEach((v, k) => {
      if (v == true)
        filterChecked = true;
    });
    var filteredProducts = filterChecked? 
    this.totalProducts.filter((p) => {
      return this.filterMaterialBoxes.get(p.material) == true
    }) :
    this.totalProducts;

    this.productsFiltered.emit(filteredProducts);

  }
}
