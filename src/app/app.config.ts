import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { nailReducer } from './store/nails/reducers/nails.reducer';
import { NailsEffects } from './store/nails/effects/nails.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    provideToastr(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideStore({
      nail: nailReducer
    }),
    provideEffects([NailsEffects]),
]
};



