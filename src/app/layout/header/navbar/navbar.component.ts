import { Component } from '@angular/core';
import { NavActionsComponent } from './nav-actions.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, NavActionsComponent],
  templateUrl: `./navbar.component.html`,
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {}
