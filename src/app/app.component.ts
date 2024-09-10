import {Component} from '@angular/core';
import {TruckComponent} from './truck/truck.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TruckComponent],
  template: `
    <main>
      <header class="brand-name">
        San Francisco Food Trucks
      </header>
      <section class="content">
        <app-truck></app-truck>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'trucks';
}
