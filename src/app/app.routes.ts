import { Routes } from '@angular/router';
import { DetailedView } from './views/detailed-view/detailed-view.component';
import { MainComponent } from './views/main/main.component';
export const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'detailed',
        component: DetailedView
    }
];
