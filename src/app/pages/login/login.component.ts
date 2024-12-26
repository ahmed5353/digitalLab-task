import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div
      class="container-fluid vh-100 bg-light d-flex align-items-center justify-content-center"
    >
      <div class="card shadow-sm" style="max-width: 400px">
        <div class="card-body p-4">
          <h2 class="card-title text-center mb-4">Login</h2>
          <form (ngSubmit)="onSubmit()" #loginForm="ngForm">
            <div class="mb-3">
              <label for="username" class="form-label">Username</label>
              <input
                type="text"
                class="form-control"
                id="username"
                name="username"
                [(ngModel)]="username"
                required
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                name="password"
                [(ngModel)]="password"
                required
              />
            </div>
            <button
              type="submit"
              class="btn btn-primary w-100"
              [disabled]="!loginForm.form.valid || isLoading"
            >
              {{ isLoading ? 'Logging in...' : 'Login' }}
            </button>
          </form>
          <div *ngIf="error" class="alert alert-danger mt-3">
            {{ error }}
          </div>
        </div>
      </div>
    </div>
  `,
})
export class LoginComponent {
  username: string = 'emilys';
  password: string = 'emilyspass';
  error: string = '';
  isLoading: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (!this.username || !this.password) {
      this.error = 'Please enter both username and password';
      return;
    }

    this.error = '';
    this.isLoading = true;

    this.authService
      .login({
        username: this.username,
        password: this.password,
        expiresInMins: 30,
      })
      .subscribe({
        next: () => {
          this.isLoading = false;
          this.router.navigate(['/home']);
        },
        error: (err) => {
          this.isLoading = false;
          this.error =
            err.error?.message || 'Invalid credentials. Please try again.';
          console.error('Login error:', err);
        },
      });
  }
}
