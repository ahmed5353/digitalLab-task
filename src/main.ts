// / <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

const extendedAppConfig = {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideHttpClient(),
    CookieService, // Add CookieService for token management
  ],
};

bootstrapApplication(AppComponent, extendedAppConfig).catch((err) =>
  console.error(err)
);
