import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UPS2019';
  private isProd = environment.production;

  getEnvironment(): string {
    return this.isProd ? 'PROD' : 'DEV';
  }
}
