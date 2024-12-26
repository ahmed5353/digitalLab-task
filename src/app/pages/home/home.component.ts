import { Component } from '@angular/core';
import { TodoComponent } from '../../features/todo/todo.component';

@Component({
  selector: 'app-home',
  imports: [TodoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
