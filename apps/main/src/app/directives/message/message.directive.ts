import { Directive, Input, TemplateRef, ViewContainerRef, inject } from '@angular/core';
import { MessageComponent } from '../../components/message/message.component';
import { MessageType } from '../../models/message.type';
import { MessageTemplatesComponent } from '../../components/message-templates/message-templates.component';

@Directive({
  selector: '[dfMessage]',
  standalone: true,
})
export class MessageDirective {

  #viewContainer = inject(ViewContainerRef);
  #template = inject(TemplateRef<any>);
  #templateMain: TemplateRef<any>;

  constructor() {
    const messageComponetRef = this.#viewContainer.createComponent(MessageTemplatesComponent);
    this.#templateMain = messageComponetRef.instance.messageTemplate;
  }
  

  @Input() set dfMessage(value: MessageType) {
    this.#viewContainer.clear();
    if (value === 'main') {
      this.#viewContainer.createEmbeddedView(this.#template);
    }
    if (value === 'component') {
      this.#viewContainer.createComponent(MessageComponent);
    }
    if (value === 'template') {
      this.#viewContainer.createEmbeddedView(this.#templateMain);
    }
    
  }

}
