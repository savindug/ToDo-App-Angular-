import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit = () => {

    if(this.title == null){
      alert("Please Add Todo Title")
    }else{
      const todo = {
        title: this.title,
        completed: false
      }
      
      this.addTodo.emit(todo);
    }
  
    }

}
