import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin } from 'rxjs';

@Injectable({ providedIn: 'root' })
//TODO:explore how to segregate the i18n message file
export class TranslationLoaderService {
  constructor(private http: HttpClient, private translate: TranslateService) {}

  loadTranslations(lang: string = 'en'): Promise<void> {
    const files = ['common', 'dashboard']; // all your translation file names
    const requests = files.map(file => this.http.get<Record<string, any>>(`/assets/i18n/${file}.json`));

    return new Promise((resolve, reject) => {
      forkJoin(requests).subscribe({
        next: (responses) => {
          // Merge all translations into one object
          const merged = Object.assign({}, ...responses);
          this.translate.setTranslation(lang, merged, true); // merge = true to extend existing translations
          this.translate.use(lang);
          resolve();
        },
        error: (err) => reject(err),
      });
    });
  }
}
