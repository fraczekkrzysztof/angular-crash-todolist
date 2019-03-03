import { Component, OnInit,Input } from '@angular/core';
import { Todo } from 'src/app/modules/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo;

  constructor() { }

  ngOnInit() {
  }

  //Set Dynamin Classes
  setClasses(){
    let classes = {
      todo: true,
      'is-complete':this.todo.completed
    }
    return classes;
  }

}
