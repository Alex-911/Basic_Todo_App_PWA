import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];

  constructor() {}

  getTodo(): Observable<Todo[]> {
    return of(this.todos);
  }

  async addTodo(newTodo: Todo): Promise<void> {
    this.todos.push(newTodo);
  }

  async updateTodo(todo: Todo): Promise<void> {
    const index = this.todos.indexOf(
      this.todos.find((val) => val.id === todo.id)
    );

    this.todos[index].completed = !this.todos[index].completed;
  }

  async deleteTodo(todo: Todo): Promise<void> {
    this.todos = this.todos.filter((val) => todo.id !== val.id);
  }
}
