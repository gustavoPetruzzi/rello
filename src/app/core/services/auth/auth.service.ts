import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  constructor(private http: HttpClient) {
    super();
    this.apiUrl = this.apiUrl + '/auth';
  }

  public login(email: string, password: string) {
    const user = { email, password };
    return this.http.post(this.apiUrl, user);
  }
  public signUp(email: string, password: string, name: string) {
    const newUser = { email, password, name };
    return this.http.post(this.apiUrl, newUser);
  }
}
