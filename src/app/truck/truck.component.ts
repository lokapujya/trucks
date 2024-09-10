import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TruckLocationComponent} from '../truck-location/truck-location.component';
import {TruckLocation} from '../trucklocation';
import * as truckData from '../../assets/FoodPermit.json';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-truck',
  standalone: true,
  imports: [CommonModule, TruckLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by street" #filter/>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-truck-location 
        *ngFor="let TruckLocation of filteredLocationList" 
        [TruckLocation]="TruckLocation"
      ></app-truck-location>
    </section>
  `,
  styleUrls: ['./truck.component.css'],
})

export class TruckComponent {
  truckLocationList: TruckLocation[] = [];
  constructor() {
  }
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  data: any = truckData;
  filteredLocationList: TruckLocation[] = [];

  ngOnInit() {
    console.log('Data', this.data);
    this.truckLocationList = this.data.default.map((b: any) => this.iTruckFromJSON(b));
    this.filteredLocationList = this.truckLocationList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.truckLocationList;
      return;
    }
    this.filteredLocationList = this.truckLocationList.filter((truckLocation) =>
      truckLocation?.Address.toLowerCase().includes(text.toLowerCase()),
    );
  }

  iTruckFromJSON(json: any): TruckLocation {
    return {
      locationid: json.locationid,
      Applicant: json.Applicant,
      Address: json.Address,
      FoodItems: json.FoodItems,
      FacilityType: json.FacilityType
    };
  }
}
