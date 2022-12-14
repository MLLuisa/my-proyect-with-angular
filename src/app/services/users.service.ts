import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User, CreateUserDTO } from './../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/users';
  constructor(private http: HttpClient) {}

  create(dto: CreateUserDTO) {
    return this.http.post<User>(this.apiUrl, dto);
  }

  getAll() {
    return this.http.get<User[]>(this.apiUrl);
  }
}
