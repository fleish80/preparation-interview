import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CountriesStoreService } from '../services/countries-store/countries-store.service';
import { CountriesControlsService } from '../services/countries-controls/countries-controls.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { JsonPipe } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'df-countries',
  standalone: true,
  imports: [MatFormFieldModule, JsonPipe, MatInputModule, ReactiveFormsModule],
  template: `
  <mat-form-field appearance="outline">
    <mat-label>Countries</mat-label>
    <input matInput [formControl]="nameCtrl">
  </mat-form-field>
  

  <pre>{{countries() | json}}</pre>

  `,
  styles: `
    :host {
        padding-block-start: 50px;
        display: flex;
        align-items: center;
        flex-direction: column;
      }
  
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CountriesComponent {

  #countriesStoreService = inject(CountriesStoreService);
  countries = this.#countriesStoreService.countries;
  #countriesControlsService = inject(CountriesControlsService);
  nameCtrl = this.#countriesControlsService.nameCtrl;


}
