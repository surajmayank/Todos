import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { APP_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
 
  constructor(private http: HttpClient) { }

  retriveAllData(username) {
    return this.http.get<Todo[]>(`${APP_URL}/users/${username}/todos`);
  }

  retriveData(username, id) {
    return this.http.get<Todo>(`${APP_URL}/users/${username}/todos/${id}`);
  }


  deleteTodo(username, id) {
    return this.http.delete(`${APP_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username, id, todo) {
    return this.http.put(`${APP_URL}/users/${username}/todos/${id}`, todo);
  }

  createTodo(username, todo) {
    return this.http.post(`${APP_URL}/users/${username}/todos/`, todo);
  }
}
