import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  ChkPrime(No:number){
    let i:number=0;
    let flag:Boolean=true;
    for(i=2;i<=(No/2);i++){
      if(No%i==0){
        flag=false;
        break;
      }
    }

    if(flag==true){
      return "It is Prime Number";
    }
    else{
      return "It is not a Prime Number";
    }
  }


}
