import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TruckLocation} from '../trucklocation';

@Component({
  selector: 'app-truck-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        src="../../assets/maracaiba-flotta-food-truck-costi-bassi-business-scalabile.jpg"
        alt="Exterior photo of {{ TruckLocation.Applicant }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ TruckLocation.Applicant }}</h2>
      <p class="listing-location">{{ TruckLocation.Address }}</p>
    </section>
  `,
  styleUrls: ['./truck-location.component.css'],
})
export class TruckLocationComponent {
  @Input() TruckLocation!: TruckLocation;
}
