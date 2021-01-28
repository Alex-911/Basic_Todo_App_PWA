import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Todo, TodoService } from './../../services/todo.service';
import { v4 as uuidV4 } from 'uuid';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss'],
})
export class TodoformComponent implements OnInit {
  public todoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      title: ['', [Validators.required]],
    });
  }

  async addTodo(): Promise<void> {
    if (this.todoForm.valid) {
      const title: string = this.todoForm.get('title').value as string;

      const newTodo: Todo = {
        id: uuidV4(),
        title: title,
        completed: false,
      };

      this.todoForm.reset();
      this.todoService.addTodo(newTodo);
      this.snackBar.open('Todo Added Successfully. ✔', '', { duration: 500 });
    }
  }
}
