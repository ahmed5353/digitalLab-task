import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const currentUser = authService.getCurrentUser();

  if (currentUser?.accessToken) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${currentUser.accessToken}`,
      },
    });
  }

  return next(req);
};
