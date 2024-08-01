import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Inject the current `AuthService` and use it to get an authentication token:
  const authService = inject(AuthService)
const token = authService.getAuthToken()
console.log('token obtenido', token)

  // Check if the request URL includes 'login'
  if (req.url.includes('/login')) {
    // If the URL includes 'login', pass the original request
    return next(req);
  }

  // Clone the request to add the authentication header.
  const newReq = req.clone({
    headers: req.headers.set('token', `${token}`)
  });

    // Log the new request for debugging
    console.log('Request con token:', newReq);
    
  // Pass the cloned request instead of the original request to the next handler.
  return next(newReq);
};
