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
        <input type="text" placeholder="Filter by street" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-truck-location
        *ngFor="let TruckLocation of TruckLocationList"
        [TruckLocation]="TruckLocation"
      ></app-truck-location>
    </section>
  `,
  styleUrls: ['./truck.component.css'],
})

export class TruckComponent {
  TruckLocationList: TruckLocation[] = [];
  constructor() { }
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  data: any = truckData;

  ngOnInit() {
    console.log('Data', this.data);
    this.TruckLocationList = this.data.default.map((b: any) => this.iTruckFromJSON(b));
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

  /*TruckLocationList: TruckLocation[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Truck',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
  ];*/
}

