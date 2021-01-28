import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Todo, TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;

  constructor(
    private todoService: TodoService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  async deleteTodo(): Promise<void> {
    this.todoService.deleteTodo(this.todo);
    this.snackbar.open('Todo Deleted Successfully.', '', { duration: 1000 });
  }

  updateTodo(): void {
    this.todoService.updateTodo(this.todo);
  }
}
