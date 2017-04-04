import {Component, Input} from '@angular/core';

@Component({
  selector: 'collapsible-well',
  template: `
    <div (click)="toggleContent()" class="well pointable">
      <h4>
        // Aca va el title
        <ng-content select="[well-title]"></ng-content>
      </h4>
      // Aca va el body
      <ng-content *ngIf="visible" select="[well-body]"></ng-content>
    </div>
  `
})

//select=".title"  es cuando pongo una class="title" en el bloque se código hijo que se va a cargar
//select=""[atributo]"" lo mismo pero con un atributo. Es mejor

export class CollapsibleWellComponent {
  @Input() title:string;
  visible: boolean = true;

  toggleContent() {
    this.visible = !this.visible;
  }
}
