import {Component, Input, Output, EventEmitter} from '@angular/core';

import {IEvent} from './shared/index';

@Component({
  selector: 'event-thumbnail',
  template: `<div>
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2 [ngClass]="{green: event?.name === 'ng-nl', bold: event?.name === 'Angular Connect'}">{{event?.name}}</h2>
      <div>Date: {{event?.date}}</div>
      <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div [hidden]="event?.price">Price: \${{event?.price}}</div>
      <div *ngIf="event?.location">
        <span>Location: {{event?.location.address}}</span>
        <span class="pad-left">
          {{event?.location.city}}, {{event?.location.country}}
        </span>
      </div>
      <div>
        Online URL: {{event?.onlineUrl}}
      </div>
      <button class="btn btn-primary" (click)="handleClickMe()">
        Click Me!
      </button>
    </div>
  </div>
  `,
  styles: [`
     .well hoverwell thumbnail {min-height: 210px;}
     .pad-left {margin-left: 10px;}
     .well div {color: #bbb;}
     .green {color: #003300 !important;}
     .bold {font-weight: bold;}
  `]
})

//Los styles se aplican sólo a los elementos dentro del componente.
//Si hay otro elemento igual, fuera del componente, no se le aplica el estilo (está encapsulado)
//event? chequea si el evento llegó al componente y no es null

//*ngIf no pone el elemento en el dom
//[hidden] lo pone pero lo hace hidden
//[class.green]="condicion"  --> si se cumṕle le aplica la clase green al elemento

export class EventThumbnailComponent {
  //propiedad de tipo any. Viene por input al componente
  //comunicacion con child components
  @Input() event: IEvent
  @Output() eventClick = new EventEmitter()
  someProperty:any = "some value";

  handleClickMe() {
    //emite un evento foo hacia el componente padre
    this.eventClick.emit(this.event.name);
    console.log('Clicked!', this.event.name);
  }

  logFoo() {
    console.log('foo');
  }

  getStartTimeClass() {
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    return {
      green: isEarlyStart,
      bold: isEarlyStart
    }

    //o
    // if (this.event && this.event.time === '8:00 am') return 'green bold'; o ['green', 'bold']
    // return ''; o []
  }

  getStartTimeStyle():any {
    if (this.event && this.event.time === '8:00 am')
      return {
        color: '#003300',
        'font-weight': 'bold'
      };

    return {};
  }
}
