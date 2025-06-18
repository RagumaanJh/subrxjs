import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Comp1Component } from "./comp1/comp1.component";
import { Comp2Component } from "./comp2/comp2.component";
import { DataService} from './data.service';

@Component({
  selector: 'app-root',
  imports: [Comp1Component, Comp2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[DataService]
})
export class AppComponent {
  title = 'subjrxjs';

  constructor(private dataService: DataService){  
  }
}
