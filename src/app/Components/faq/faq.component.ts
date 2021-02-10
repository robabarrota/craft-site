import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data/data.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  FAQs = this.dataService.getFAQs();
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
