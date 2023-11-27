import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'df-message-templates',
  standalone: true,
  imports: [],
  template: `
    <ng-template #message>
      <p>Message from the template</p>
    </ng-template>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageTemplatesComponent {
  @ViewChild('message', {static: true}) messageTemplate: TemplateRef<any>;
 }
