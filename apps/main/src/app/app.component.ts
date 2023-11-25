import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  selector: 'df-root',
  template: `
    <router-outlet/>
  `
})
export class AppComponent {


}
