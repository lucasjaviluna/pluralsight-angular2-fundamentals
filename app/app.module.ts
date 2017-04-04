import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AuthService} from './user/auth.service';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//Components
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  EventService,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
} from './events/index';

import {EventsAppComponent} from './events-app.component';
// import {EventsListComponent} from './events/events-list.component';
// import {EventThumbnailComponent} from './events/event-thumbnail.component';
import {NavBarComponent} from './nav/navbar.component';
// import {EventDetailsComponent} from './events/event-details/event-details.component';
// import {CreateEventComponent} from './events/create-event.component';
import {Error404Component} from './errors/404.component';
// import {EventRouteActivator} from './events/event-details/event-route-activator.service';
// import {EventListResolver} from './events/events-list-resolver.service';

//Services
// import {EventService} from './events/shared/event.service';
//import {ToastrService} from './common/toastr.service';
import {TOASTR_TOKEN, Toastr} from './common/toastr.service';
import {CollapsibleWellComponent} from './common/collapsible-well.component';

//Routes
import {appRoutes} from './routes';


declare let toastr: Toastr;

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  providers: [
    EventService,
    // ToastrService,
    {provide: TOASTR_TOKEN, useValue: toastr},
    EventRouteActivator,
    EventListResolver,
    AuthService,
    // {provide: EventService, useValue: EventService},
    {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
    {provide: 'api', useValue: 'http://localhost:3000'}
  ],
  bootstrap: [EventsAppComponent]
})

export class AppModule {}

function checkDirtyState(component:CreateEventComponent) {
  console.log(component.isDirty);
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
