import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { provideServiceWorker } from '@angular/service-worker';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { AuthenticationService } from './services/authentication/authentication.service';
import { AccountEffect } from './state-management/effects/account.effects';
import { AuthEffect } from './state-management/effects/auth.effects';
import { accountReducer } from './state-management/reducers/account.reducer';
import { authReducer } from './state-management/reducers/auth.reducer';
import { globalPagesReducer } from './state-management/reducers/global-pages.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(routes),
    provideStore({ auth: authReducer, globalPages: globalPagesReducer, account: accountReducer }),
    provideEffects([AuthEffect, AccountEffect]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
    AuthenticationService
  ]
};
