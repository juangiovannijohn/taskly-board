import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private http = inject(HttpClient);
  private isToggled = signal(false);

  // Método para obtener el valor del signal
  getIsToggled() {
    return this.isToggled;
  }

  // Método para setear el valor del signal
  setToggled(value: boolean) {
    this.isToggled.set(value);
  }

  // Método para alternar el valor del signal
  toggle() {
    this.isToggled.set(!this.isToggled());
  }

  getNavbarItems(userId: string) {
    console.log('se solicita la los Boards del user id', userId);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('token', token ? token : '');

    return this.http.get(`http://localhost:9090/views/nav-bar/${userId}`, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      console.error('Ocurrió un error:', error.error.message);
    } else {
      // El backend retornó un código de respuesta de error
      console.error(
        `Backend retornó el código ${error.status}, ` +
        `el cuerpo del error fue: ${error.error}`);
    }
    // Retorna un observable con un mensaje de error para el usuario
    return throwError(() => new Error('Algo malo ocurrió; por favor, intenta de nuevo más tarde.'));
  }
}
