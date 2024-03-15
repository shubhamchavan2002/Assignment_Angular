import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmaticService {

  constructor() { }

  Addition(No1:number,No2:number){
    return No1+No2;
  }
  Subtraction(No1:number,No2:number){
    return No1-No2;
  }

}
