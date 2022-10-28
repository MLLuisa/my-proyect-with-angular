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

  names: string[] = ['Nico', 'Juli', 'Santi'];
  newName = '';

  thingsToDo = ['Estudiar typescript', 'estudiar angular', 'buscar un curro'];
  newThings = '';


  toggleButton() {
    this.btnDisable = !this.btnDisable;
  }
  increaseAge() {
    this.person.age += 1;
  }
  decreaseAge() {
    this.person.age -= 1;
  }
  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }
  deleteName(index: number) {
    this.names.splice(index, 1);
  }
  addThings() {
    this.thingsToDo.push(this.newThings);
    this.newThings = '';
  }
  deleteThings(index: number) {
    this.thingsToDo.splice(index, 1);
  }
}
