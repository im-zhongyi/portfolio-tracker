import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { provideTranslations } from './util/provide-translations';
import { provideHttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';




export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), 
    provideCharts(withDefaultRegisterables()),
    provideTranslations(),
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatButtonModule)
  ]
};
