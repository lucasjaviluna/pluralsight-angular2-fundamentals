import {Component} from '@angular/core';

@Component({
  selector: 'events-list',
  template: `
  <div>
    <h1>Upcoming Angular 2 Events</h1>
    <hr/>
    <div class="well">
      <div>Hello World!</div>
    </div>
    <event-thumbnail #thumbnail (eventClick)="handleEventClicked($event)" [event]="event1"></event-thumbnail>
    <h3>{{thumbnail.someProperty}}</h3>
    <button class="btn btn-primary" (click)="thumbnail.logFoo()">
      Log me some foo
    </button>
  </div>
  `
})
//#thumbnail es una variable local de referencia (o variable de template) al child component (event-thumbnail)

export class EventsListComponent {
  //mando event1 como un input al componente thumbnail
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/app/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  };

  handleEventClicked(data) {
    console.log('Received:', data);
  }
}
