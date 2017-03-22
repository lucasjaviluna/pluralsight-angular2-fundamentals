import {Component, OnInit} from '@angular/core';
import {EventService} from './shared/event.service';
import {ToastrService} from '../common/toastr.service';

@Component({
  template: `
  <div>
    <h1>Upcoming Angular 2 Events</h1>
    <hr/>
    <div class="well">
      <div>Hello World!</div>
    </div>
    <div class="row">
      <div *ngFor="let event of events" class="col-md-5">
        <event-thumbnail #thumbnail (click)="handleThumbnailClick(event.name)" (eventClick)="handleEventClicked($event)" [event]="event"></event-thumbnail>
        <h3>{{thumbnail.someProperty}}</h3>
      </div>
    </div>
    <button class="btn btn-primary" (click)="thumbnail.logFoo()">
      Log me some foo
    </button>
  </div>
  `
})
//#thumbnail es una variable local de referencia (o variable de template) al child component (event-thumbnail)
// <event-thumbnail #thumbnail (eventClick)="handleEventClicked($event)" [event]="event1"></event-thumbnail>
// <h3>{{thumbnail.someProperty}}</h3>

//*ngFor: es una directiva estructural

export class EventsListComponent implements OnInit {
  //mando event1 como un input al componente thumbnail
  // event1 = {
  //   id: 1,
  //   name: 'Angular Connect',
  //   date: '9/26/2036',
  //   time: '10:00 am',
  //   price: 599.99,
  //   imageUrl: '/app/assets/images/angularconnect-shield.png',
  //   location: {
  //     address: '1057 DT',
  //     city: 'London',
  //     country: 'England'
  //   }
  // };

  events: any[];
  constructor(private eventService: EventService, private toastr:ToastrService) {

  }

  ngOnInit() {
    this.events = this.eventService.getEventos();
  }

  handleEventClicked(data) {
    console.log('Received:', data);
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}