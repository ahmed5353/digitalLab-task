import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/header/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  styleUrl: './app.component.scss',
  template: ` <app-navbar></app-navbar>
    <router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 'digitalLab-task';
}
