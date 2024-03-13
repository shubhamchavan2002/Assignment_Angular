import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform {

  transform(value: string): string {
     let temp:string="";
     let i:number=0;
    for(i=value.length-1;i>=0;i--){
      temp=temp+value[i];
    }
    return temp;
  }

}
