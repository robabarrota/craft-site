import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Laura\'s Scrunchy Shop';
  
  constructor(private titleService: Title, private meta: Meta) {
    titleService.setTitle('Laura\'s Scrunchy Shop');
    meta.addTag({name:'descript', content:'Laura\'s Scrunchy Shop'}, true);
    meta.addTag({name:'author', content:'Robert Abarrota'}, true);
  }
}
