import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imgParent = '';
  showImg = true;
  token = '';

  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) {}

  onLoaded(img: string) {
    console.log('log padre', img);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }

  createUser() {
    this.usersService
      .create({
        name: 'Maria',
        email: 'maria@mail.com',
        password: '112233',
      })
      .subscribe((rta) => {
        console.log(rta);
      });
  }
}
