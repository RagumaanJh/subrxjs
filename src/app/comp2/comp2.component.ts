import { Component, input, OnInit } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-comp2',
  imports: [],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.scss'
})
export class Comp2Component implements OnInit {

constructor(private dataService:DataService ){}
 inputtext: string | undefined;
  ngOnInit(): void {
   
  this.dataService.dataEmitter.subscribe((value) => {
   this.inputtext = value;
  })
  }
     
}
