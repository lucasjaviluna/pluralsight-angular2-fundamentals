import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `<div>
    <div class="well hoverwell thumbnail">
      <h2>{{event.name}}</h2>
      <div>Date: {{event.date}}</div>
      <div>Time: {{event.time}}</div>
      <div>Price: \${{event.time}}</div>
      <div>
        <span>Location: {{event.location.address}}</span>
        <span class="pad-left">
          {{event.location.city}}, {{event.location.country}}
        </span>
      </div>
      <button class="btn btn-primary" (click)="handleClickMe()">
        Click Me!
      </button>
    </div>
  </div>
  `,
  styles: [`
     .pad-left {margin-left: 10px;}
     .well div {color: #bbb;}
  `]
})

//Los styles se aplican sólo a los elementos dentro del componente.
//Si hay otro elemento igual, fuera del componente, no se le aplica el estilo (está encapsulado)

export class EventThumbnailComponent {
  //propiedad de tipo any. Viene por input al componente
  //comunicacion con child components
  @Input() event: any
  @Output() eventClick = new EventEmitter()
  someProperty:any = "some value";

  handleClickMe() {
    //emite un evento foo hacia el componente padre
    this.eventClick.emit(this.event.name);
    console.log('Clicked!');
  }

  logFoo() {
    console.log('foo');
  }
}
