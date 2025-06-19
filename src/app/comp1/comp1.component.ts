import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService} from '../data.service';
import { YourDirectiveNameDirective } from '../your-directive-name.directive';

@Component({
  selector: 'app-comp1',
  imports: [FormsModule,YourDirectiveNameDirective],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.scss',
  
})
export class Comp1Component {
constructor(private dataService:DataService){}
  enteredText: string='';
  OnBtnClick(){
   //console.log(this.enteredText);
   this.dataService.adddata(this.enteredText);
   this.enteredText='';
  }
}
