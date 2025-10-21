import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, TranslateModule, ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  private translate = inject(TranslateService);
  private router = inject(Router);
    constructor() {
      this.translate.use('common');
    }

    navigateToHome(){
      this.router.navigateByUrl('/');
    }
  
}
