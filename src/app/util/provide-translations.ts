import { EnvironmentProviders, importProvidersFrom } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function provideTranslations(): EnvironmentProviders[] {
  return [
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage:'common',
        loader: {
          provide: TranslateLoader,
          // useFactory: HttpLoaderFactory,
          useFactory: (httpClient:HttpClient)=>{return new TranslateHttpLoader(httpClient,'./assets/i18n/','.json')},
          deps: [HttpClient]
        }
      })
    )
  ];
}