import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  async login(credentials: LoginCredentials): Promise<void> {
    console.log('Login submitted', credentials);
    // Here you would typically handle authentication
  }
}

interface LoginCredentials {
  username: string;
  password: string;
}
