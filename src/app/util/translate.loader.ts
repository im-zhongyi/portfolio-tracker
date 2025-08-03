import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { forkJoin } from 'rxjs';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


export class TranslationLoaderService {
  constructor(private translate: TranslateService, private http: HttpClient) {}

  loadAll(lang: string = 'en'): Promise<void> {
    const files = ['header', 'dashboard']; // Add other files as needed

    return new Promise((resolve) => {
      const requests = files.map(file =>
        this.http.get(`/assets/i18n/${file}.json`)
      );

      forkJoin(requests).subscribe((responses) => {
        // Merge all JSON files
        const merged = Object.assign({}, ...responses);

        // ✅ Merge into translate service (keep existing keys)
        this.translate.setTranslation(lang, merged, true);

        // Set default and active language
        this.translate.setDefaultLang(lang);
        this.translate.use(lang);

        resolve();
      });
    });
  }
}