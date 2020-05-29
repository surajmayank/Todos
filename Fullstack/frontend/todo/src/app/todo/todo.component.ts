import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number
  todo: Todo

  constructor(private todoservice: TodoDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', '', new Date);

    if (this.todo.id != -1) {
      this.todoservice.retriveData("admin", this.id).subscribe(
        data => {
          this.todo = data
        }
      )
    }

  }

  saveTodo() {
    if (this.todo.id === -1) {
      this.todoservice.createTodo("admin", this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos']);
        }
      );
    }
    else {
      this.todoservice.updateTodo("admin", this.id, this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos']);
        }
      );
    }
  }



}
