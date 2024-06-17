import { Component, inject } from '@angular/core';
import { NavbarService } from '../navbar/services/navbar.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  navbarService = inject(NavbarService)
  toggle() {
    this.navbarService.toggle();
  }
}
