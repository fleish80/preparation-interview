import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'df-messa-ge',
  standalone: true,
  imports: [CommonModule],
  template: `<p>Message from the component</p>`,
  styles: ``,
})
export class MessageComponent {

  // template = inject(TemplateRef<any>);
}
