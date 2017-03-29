import {Routes} from '@angular/router';
import {EventsListComponent} from './events/events-list.component';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {CreateEventComponent} from './events/create-event.component';
import {Error404Component} from './errors/404.component';
import {EventRouteActivator} from './events/event-details/event-route-activator.service';
import {EventListResolver} from './events/events-list-resolver.service';

export const appRoutes:Routes = [
  {path:'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},

  //antes de resolver esta ruta, se llama a EventListResolver.
  //Y cuando el resolver termina y retorna algún dato, agrega ese dato a la ruta
  //con la propiedad events, y luego se consume desde el component (EventsListComponent)
  // {path:'events', component: EventsListComponent, resolve: {events:EventListResolver} },
  {path:'events', component: EventsListComponent},

  {path:'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
  {path:'404', component: Error404Component},
  {path:'', redirectTo:'/events', pathMatch: 'full'},

  //cuando vamos a /user se va a cargar user.module de este path
  {path: 'user', loadChildren: 'app/user/user.module#UserModule'}
];
