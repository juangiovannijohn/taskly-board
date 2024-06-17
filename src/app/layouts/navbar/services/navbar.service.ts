import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

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
}
