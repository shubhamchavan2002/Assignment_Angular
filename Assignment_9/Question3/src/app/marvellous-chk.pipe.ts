import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value:number ,checkType:string): string {
    switch (checkType) {
      case "prime":
        return this.isPrime(value) ? "Prime" : "Not Prime";
      case "perfect":
        return this.isPerfect(value) ? "Perfect" : "Not Perfect";
      case "even":
        return this.isEven(value) ? "Even" : "Not Even";
      case "odd":
        return this.isOdd(value) ? "Odd" : "Not Odd";
      default:
        return "Invalid Check Type";
    }
  }

  public isPrime(num:number):boolean{
    for (let i = 2; i <= (num/2); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  public isPerfect(num:number):boolean{
    let iSum=0;
    for (let i = 1; i <= (num/2); i++) {
      if (num % i === 0) {
         iSum=iSum+i;
      }
    }
    return num==iSum;
  }

  public isEven(num: number): boolean {
    return num % 2 === 0;
  }

  public isOdd(num: number): boolean {
    return num % 2 !== 0;
  }

}
