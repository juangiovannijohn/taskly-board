import { Component, HostListener, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { HeaderComponent } from './layouts/header/header.component';
import { BoardComponent } from './layouts/board/board.component';
import { CommonModule } from '@angular/common';
import { NavbarService } from './layouts/navbar/services/navbar.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from './core/services/auth.service';
import { authInterceptor } from './core/interceptor/auth.interceptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HeaderComponent,
    BoardComponent,
    CommonModule,
    HttpClientModule
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useValue: authInterceptor,
      multi: true
    }
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
authService = inject(AuthService)
  navbarService = inject(NavbarService)
ngOnInit(): void {
  this.authService.login().subscribe()
}
}
