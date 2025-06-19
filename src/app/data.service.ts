import { EventEmitter, Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable()
export class DataService{
//dataEmitter= new EventEmitter<string>();


//private dataEmitter = new Subject<string>();
public dataEmitter = new BehaviorSubject<string>('');

// databox=this.dataEmitter.asObservable();
    adddata(data: string){
        //this.dataemmiter.emit(data);
      
        
        this.dataEmitter.next(data);   

    }
}