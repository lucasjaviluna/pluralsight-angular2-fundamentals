import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

//Components
import {EventsAppComponent} from './events-app.component';
import {EventsListComponent} from './events/events-list.component';
import {EventThumbnailComponent} from './events/event-thumbnail.component';
import {NavBarComponent} from './nav/navbar.component';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {CreateEventComponent} from './events/create-event.component';

//Services
import {EventService} from './events/shared/event.service';
import {ToastrService} from './common/toastr.service';

//Routes
import {appRoutes} from './routes';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent
  ],
  providers: [
    EventService,
    ToastrService,
    {provide: 'api', useValue: 'http://localhost:3000'}
  ],
  bootstrap: [EventsAppComponent]
})

export class AppModule {}
