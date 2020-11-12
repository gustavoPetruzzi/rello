import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  // TODO: improve this
  apiUrl = 'http://localhost:3000';
  constructor() { }
}
