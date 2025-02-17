import { Routes } from '@angular/router';
import { DetailedView } from './views/detailed-view/detailed-view.component';
import { MainComponent } from './views/main/main.component';
import { CategorieComponent } from './views/categorie/categorie.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { LoginComponent } from './views/login/login.component';
import { AmorComponent } from './views/amor/amor.component';
export const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'nails',
        component: CategorieComponent
    },
    {
        path: 'detailed/:id',
        component: DetailedView
    },
    {
        path: 'amor',
        component: AmorComponent
    },
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: LoginComponent
            }
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
