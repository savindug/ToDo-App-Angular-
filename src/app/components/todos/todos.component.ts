import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  
  constructor(private todoService:   TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo){
   alert('Are Sure to Delete '+ JSON.stringify(todo.title))
   this.todos = this.todos.filter(t => t.id !== todo.id)

   this.todoService.deleteTodo(todo).subscribe();
  }
}
