import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { authInterceptor } from './core/interceptor/auth.interceptor';
import { getSingleSpaExtraProviders } from 'single-spa-angular';
import { APP_BASE_HREF } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    getSingleSpaExtraProviders(),
    provideRouter(routes, withHashLocation()),
    provideHttpClient(),
    {
      provide: HTTP_INTERCEPTORS,
      useValue: authInterceptor,
      multi: true
    }
  ]
};
