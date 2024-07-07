import { Routes } from '@angular/router';
import { AuthGaurd } from './guards/auth.guard';
import { AuthComponent } from './layouts/auth/auth.component';
import { HomeComponent } from './layouts/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('./views/auth/auth.routes').then((m) => m.routesAuth),
            },
        ],
    },
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGaurd],
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('./views/home/home.routes').then((m) => m.routesHome),
            },
        ],
    },
];
