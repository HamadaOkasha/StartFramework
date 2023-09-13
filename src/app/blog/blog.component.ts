import { UsersService } from '../users.service';
import { User } from './../user';
import { Component } from '@angular/core';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
}) 
export class BlogComponent {
  userList:User[]=[];
  constructor(){
    let userList=new UsersService();
    this.userList=userList.users;
  }
  users:User[]=[
  //  {fName:'shimaa',age:30,gender:'female',salary: 45678 },
  //  {fName:'hossam',age:30,gender:'male',salary: 45678 },
  //  {fName:'hend',age:30,gender:'female',salary: 45678 },
  //  {fName:'heba',age:30,gender:'female',salary: 45678 },
  //  {fName:'ahmed',age:30,gender:'male',salary: 45678 }
  ]
}
