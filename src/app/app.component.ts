import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  widthImg = 10;
  box = {
    width: 100,
    height: 100,
    background: 'red'
  };
  register = {
    name: '',
    email: '',
    password: ''
  }
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

  products: Product[] = [
    {
      name: 'El mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'El mejor juguete',
      price: 3434,
      image: './assets/images/toy.jpg'
    },
    {
      name: 'Casa para perro',
      price: 565,
      image: './assets/images/house.jpg',
      category: 'all',
    },
    {
      name: 'Mis libros',
      price: 565,
      image: './assets/images/books.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 565,
      image: './assets/images/bike.jpg',
      category: 'all',
    },
    {
      name: 'Colleción de albumnes',
      price: 565,
      image: './assets/images/album.jpg',
      category: 'all',
    }
  ]



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
onRegister() {
  console.log(this.register);
}
}
