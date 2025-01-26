import { Routes } from '@angular/router';
import { DetailedView } from './views/detailed-view/detailed-view.component';
import { MainComponent } from './views/main/main.component';
import { CategorieComponent } from './views/categorie/categorie.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
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
        path: '**',
        component: NotFoundComponent
    }
];
