import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';
import {FilterUtils} from 'primeng/utils';
import { MessageService } from 'primeng/api';


export class Todo {
  constructor(

    public id: number,
    public movieName: string,
    public description: string,
    public releaseDate: Date

  ) { }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos: Todo[]
  message: string
  constructor(private todoDataService: TodoDataService, private router:Router,private messageService: MessageService) { }

  ngOnInit() {

  //   FilterUtils['custom'] = (value, filter): boolean => {
  //     if (filter === undefined || filter === null || filter.trim() === '') {
  //         return true;
  //     }
  //     if (value === undefined || value === null) {
  //         return false;
  //     }
  //     return parseInt(filter) > value;
  // }
    this.refreshTodo();
  }
  refreshTodo() {
    this.todoDataService.retriveAllData("admin").subscribe(
      response => this.handleSuccessFullResponse(response),
      error => this.handleErrorResponse(error)
    );
  }
  handleErrorResponse(error) {
    console.log(error.error.message);
  }

  handleSuccessFullResponse(response) {
    this.todos = response
  }
  addSingle() {
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
}
  deleteTodo(id) {
    
    this.todoDataService.deleteTodo("admin", id).subscribe(
      response => {
        console.log(response);
        this.addSingle();
        this.message = `Delete of movie ${id} Successful !`
        this.refreshTodo();
      }

    );
  }
  clear() {
    this.messageService.clear();
}
  updateTodo(id){
    this.router.navigate(['todo',id])
  }

  createTodo(){
    this.router.navigate(['todo',-1])
  }
}
