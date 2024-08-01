import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient)
  private tokenKey: string = 'token';
  constructor() { }

  login(){
    const req = {
      "email": "hola@gmail.com",
      "password": "hola"
    }
      return this.http.post('http://localhost:9090/api/login', req).pipe(
        tap((resp:any )=> {
          const token = resp.token
          this.setToken(token)
        })
      )
  }

  getAuthToken(){
    return localStorage.getItem(this.tokenKey);
  }

    // Guarda el token en el localStorage
    setToken(token: string): void {
      localStorage.setItem(this.tokenKey, token);
    }
  
    // Elimina el token del localStorage
    removeToken(): void {
      localStorage.removeItem(this.tokenKey);
    }

    logout(): void {
      localStorage.removeItem(this.tokenKey);
    }
}
