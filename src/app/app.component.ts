import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from "@angular/common";

type TodoItem = {//create a type alias in type script
  id: number,
  title: string,
  completed: boolean,
  userId: number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  findUser(userId: number){
    return this.users.find(user => user.userId === userId)
  }

  users = [
    {userId: 1, name: "Kasun"},
    {userId: 2, name: "Nisali"},
    {userId: 3, name: "Senuli"},
    {userId: 4, name: "Chamin Wishanka"},
    {userId: 5, name: "Dasun Madushanka"},
  ]
  //todoItems:{}
  todoItems:TodoItem[] = [];
  loading = true;
  constructor() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todoItems => this.todoItems = todoItems)
      .finally(() => setTimeout(() => {
        this.loading = false;
      }, 2000));
  }

  trackItemFn(index:number, item: TodoItem): number {
    return item.id;
  }
}
