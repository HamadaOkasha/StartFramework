import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users:User[]=[
      {fName:'shimaa',age:30,gender:'female',salary: 45678 },
      {fName:'hossam',age:30,gender:'male',salary: 45678 },
      {fName:'hend',age:30,gender:'female',salary: 45678 },
      {fName:'heba',age:30,gender:'female',salary: 45678 },
      {fName:'ahmed',age:30,gender:'male',salary: 45678 }
    ]
  
  constructor() { }

}
