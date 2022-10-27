import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name =  'Maria';
  age = 20;
  image = 'https://via.placeholder.com/150';
  btnDisable = true;
  person = {
    name: 'Maria',
    age: 20,
    avatar: 'https://via.placeholder.com/150'
  }
}
