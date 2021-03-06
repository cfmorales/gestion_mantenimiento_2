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
            },
            {
                path: 'bitacoraDetalle',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../pages/bitacora-detalle/bitacora-detalle.module').then(m => m.BitacoraDetallePageModule)
                    }
                ]
            },
            {
                path: 'repuestos',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../pages/repuestos/repuestos.module').then(m => m.RepuestosPageModule)
                    }
                ]
            },
            {
                path: 'reportes-alerta',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../pages/reportes-alerta/reportes-alerta.module').then(
                                m => m.ReportesAlertaPageModule)
                    }
                ]
            },
            {
                path: 'reportes-ejecucion',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../pages/reportes-ejecucion/reportes-ejecucion.module').then(
                                m => m.ReportesEjecucionPageModule)
                    }
                ]
            },
            {
                path: 'reportes-ficha',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../pages/reportes-ficha-ejecucion/reportes-ficha-ejecucion.module').then(
                                m => m.ReportesFichaEjecucionPageModule)
                    }
                ]
            },
            {
                path: 'reportes-lista',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../pages/reportes-lista-equipos/reportes-lista-equipos.module').then(
                                m => m.ReportesListaEquiposPageModule)
                    }
                ]
            },
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
                path: 'orden-trabajo-header',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../pages/orden-trabajo-header/orden-trabajo-header.module').then(m => m.OrdenTrabajoHeaderPageModule)
                    }
                ]
            }, {
                path: 'orden-trabajo-general',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../pages/orden-trabajo-general/orden-trabajo-general.module').then(m => m.OrdenTrabajoGeneralPageModule)
                    }
                ]
            },
            {
                path: 'reportes',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../pages/reportes/reportes.module').then(m => m.ReportesPageModule)
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
                redirectTo: '/home/reportes-alerta',
                pathMatch: 'full'
            },
            {
                path: 'home',
                redirectTo: '/home/reportes-alerta',
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
