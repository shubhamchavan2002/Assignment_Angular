import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers:[NumberService,StringService]

})
export class ChildComponent {
  public store:string="";
  public CountCapital:number=0;

  constructor(private obj1:NumberService,private obj2:StringService){
    this.store=this.obj1.ChkPrime(11);
    this.CountCapital=this.obj2.CountCapital("Marvellous Infosystems PUNE BK");
  }


}
