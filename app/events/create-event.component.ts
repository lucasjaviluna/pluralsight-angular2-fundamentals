import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from './shared/index';

@Component({
  templateUrl: 'app/events/create-event.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left: 10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder {color: #999;}
    .error ::-moz-placeholder {color: #999;}
    .error :-moz-placeholder {color: #999;}
    .error :ms-input-placeholder {color: #999;}
  `]
})
export class CreateEventComponent implements OnInit {
  isDirty:boolean = true;
  event: any;
  
  constructor(private router: Router, private eventService: EventService) {

  }

  ngOnInit() {
    this.event = {
      name: 'Lucas',
      date: '8/8/2008',
      time: '10am',
      price: 799.99,
      location: {
        address: '456 Happy St',
        city: 'Rosario',
        country: 'Argentina'
      },
      onlineUrl: 'http://pepito.com',
      imageUrl: 'http://images6.fanpop.com/image/photos/36100000/Death-Note-image-death-note-36191960-500-345.png'
    }
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  saveEvent(formValues) {
    console.log(formValues);
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }
}
