import { Component } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { CompetitionsService } from './components/competitions/competitions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoaderService, CompetitionsService]
})
export class AppComponent {
  title = 'footballApp';
}
