import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { Product } from '../../Models/Product';
import { Router, ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-filter-widget',
  templateUrl: './filter-widget.component.html',
  styleUrls: ['./filter-widget.component.scss']
})
export class FilterWidgetComponent implements OnInit, OnChanges {

  filterCheckBoxes = new Map<string, boolean>();

  @Input() totalProducts: Product[] = [];
  @Input() filterProperty: string;
  @Output() applyFilter = new EventEmitter<{propertyName: string, filterMap: Map<string, boolean>}>();

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((val) => { 
      this.updateFilterBoxes();
    });
    this.updateFilterBoxes();
  }

  ngOnChanges() {
    this.updateFilterBoxes();
  }

  updateFilterBoxes(){
    this.filterCheckBoxes.clear();
    this.totalProducts.forEach((item, index) => {
      if (!this.filterCheckBoxes.has(item[this.filterProperty.toLowerCase()]) && item[this.filterProperty.toLocaleLowerCase()])
        this.filterCheckBoxes.set(item[this.filterProperty.toLowerCase()], false);
    });
    this.sortFilters();
    this.applyFilter.emit({propertyName: this.filterProperty, filterMap: this.filterCheckBoxes});
  }

  sortFilters() {
    const checkboxesArray = Array.from(this.filterCheckBoxes);
    var sortedList = new Map<string, boolean>();
    checkboxesArray.sort();
    checkboxesArray.forEach( element => {
      sortedList.set(element[0], element[1]);
    });
    this.filterCheckBoxes = sortedList;
  }

  toggleFilter(filter: any, event: any) {
    this.filterCheckBoxes.set(filter.key, event.checked);
    this.applyFilter.emit({propertyName: this.filterProperty, filterMap: this.filterCheckBoxes});
  }
}
