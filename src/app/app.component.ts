import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

type TodoItem = {//create a type

}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  todoItems:TodoItem = []
  constructor() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todoItems => this.todoItems = todoItems);
  }
}
