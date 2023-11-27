import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MessageDirective } from '../../directives/message/message.directive';
import { MatRadioModule } from '@angular/material/radio';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MessageType } from '../../models/message.type';

@Component({
  standalone: true,
  imports: [MessageDirective, MatRadioModule, ReactiveFormsModule],
  template: `

<mat-radio-group [formControl]="messageCtrl">
  <mat-radio-button value="main">Main</mat-radio-button>
  <mat-radio-button value="template">Template</mat-radio-button>
  <mat-radio-button value="component">Component</mat-radio-button>
</mat-radio-group>


  <ng-container *dfMessage="messageCtrl.value">
    Message from the main component
  </ng-container>
  
  `,
  styles: `
  
    :host {
          padding-block-start: 50px;
          display: flex;
          align-items: center;
          flex-direction: column;
          padding-inline: 10px;
        }

  
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MessageMainComponent {

  messageCtrl = new FormControl<MessageType>('main', {nonNullable: true});

}
