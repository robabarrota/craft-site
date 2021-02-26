import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../../Services/properties/properties.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  emailContact = "";
  instagramContact = "";
  shopContact = "";
  constructor(private propertiesService: PropertiesService) { }

  ngOnInit() {
    this.emailContact = this.propertiesService.getEmailContact();
    this.instagramContact = this.propertiesService.getInstagramContact();
    this.shopContact = this.propertiesService.getShopContact();
  }
}
