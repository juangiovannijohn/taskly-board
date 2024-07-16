import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';


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

  getNavbarItems(userId: string){
    return this.http.get(`http://localhost:9090/views/nav-bar/${userId}`).pipe(
      tap( data => { console.log(data)}))
  }
}
