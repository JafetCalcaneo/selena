import { Routes } from '@angular/router';
import { DetailedView } from './views/detailed-view/detailed-view.component';
import { MainComponent } from './views/main/main.component';
import { CategorieComponent } from './views/categorie/categorie.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { LoginComponent } from './views/login/login.component';
import { AmorComponent } from './views/amor/amor.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { NailsFormComponent } from './views/dashboard/nailsForm/nails-form.component';
import { NailsTypeFormComponent } from './views/dashboard/nails-type-form/nails-type-form.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'nails',
    component: CategorieComponent,
  },
  {
    path: 'detailed/:id',
    component: DetailedView,
  },
  {
    path: 'amor',
    component: AmorComponent,
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
  {
    path: 'admin',
    component: DashboardComponent,
    children: [
      {
        path: 'nailForm',
        component: NailsFormComponent,
      },
      {
        path: 'typeForm',
        component: NailsTypeFormComponent
      }
    ],
  },
  {
    path: 'nailForm',
    component: NailsFormComponent,
  },
  {
    path: 'typeForm',
    component: NailsTypeFormComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
