import { Component, OnInit } from '@angular/core';
import { Todo } from '../../modules/Todo';
import { TodoServiceService } from '../../services/todo-service.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  constructor(private todoServiceService:TodoServiceService) { }

  ngOnInit() {
    this.todoServiceService.getTodos().subscribe(todos => this.todos = todos);
  }

}
