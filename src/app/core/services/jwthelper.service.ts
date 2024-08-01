import { inject, Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class JwtHelperService {
  authService = inject(AuthService)

  constructor() {}

  decodeToken(token: string): jwt_decode.JwtPayload | null {
    try {
      return jwt_decode.jwtDecode<jwt_decode.JwtPayload>(token);
    } catch (error) {
      console.error("Error decoding token", error);
      return null;
    }
  }

  getUserInfo(): any {
    const token = this.authService.getAuthToken()
    if (token) {
      return this.decodeToken(token);
    }
    return null;
  }
}
