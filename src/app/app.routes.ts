import { Routes } from '@angular/router';
import { Demo } from './feature/demo/demo';
import { DemoForm } from './feature/demo-form/demo-form';

export const routes: Routes = [
    { path:'', component:Demo },
    { path:'demo-form', component: DemoForm },
];
