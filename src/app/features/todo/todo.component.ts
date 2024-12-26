import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule], // Remove HttpClientModule
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  todos: any[] = [];
  displayedTodos: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalPages: number = 0;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data.todos;
      this.totalPages = Math.ceil(this.todos.length / this.itemsPerPage);
      this.updateDisplayedTodos();
    });
  }

  updateDisplayedTodos(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.displayedTodos = this.todos.slice(
      startIndex,
      startIndex + this.itemsPerPage
    );
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateDisplayedTodos();
    }
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedTodos();
    }
  }
}
