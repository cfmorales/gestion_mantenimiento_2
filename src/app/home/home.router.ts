import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeGuard} from '../guards/home.guard';
import {UserDataResolver} from '../resolvers/user-data.resolver';
import {HomePage} from './home.page';

const routes: Routes = [
    {
        path: 'home',
        component: HomePage,
        canActivate: [HomeGuard],
        resolve: {
            userData: UserDataResolver
        },
        children: [
            {
                path: 'tarjeta-de-equipo',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../pages/tarjeta-de-equipo/tarjeta-de-equipo.module').then(m => m.TarjetaDeEquipoPageModule)
                    }
                ]
            },
            {
                path: 'planificador',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../pages/planificador/planificador.module').then(m => m.PlanificadorPageModule)
                    }
                ]
            },
            {
                path: 'orden-administrador',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../pages/orden-administrador/orden-administrador.module').then(m => m.OrdenAdministradorPageModule)
                    }
                ]
            },
            {
                path: 'orden-cliente',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../pages/orden-cliente/orden-cliente.module').then(m => m.OrdenClientePageModule)
                    }
                ]
            },
            {
                path: 'bitacora',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../pages/bitacora/bitacora.module').then(m => m.BitacoraPageModule)
                    }
                ]
            }, {
                path: 'repuestos',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../pages/repuestos/repuestos.module').then(m => m.RepuestosPageModule)
                    }
                ]
            }, {
                path: 'tarjeta-de-equipo',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../pages/tarjeta-de-equipo/tarjeta-de-equipo.module').then(m => m.TarjetaDeEquipoPageModule)
                    }
                ]
            },
            {
                path: 'list',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../pages/list/list.module').then(m => m.ListPageModule)
                    }
                ]
            },
            {
                path: 'feed',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../pages/feed/feed.module').then(m => m.FeedPageModule)
                    }
                ]
            },
            {
                path: 'messages',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../pages/messages/messages.module').then(
                                m => m.MessagesPageModule
                            )
                    }
                ]
            },
            {
                path: 'notifications',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../pages/notifications/notifications.module').then(
                                m => m.NotificationsPageModule
                            )
                    }
                ]
            },
            {
                path: 'settings',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../pages/settings/settings.module').then(
                                m => m.SettingsPageModule
                            )
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/home/feed',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRouter {
}
