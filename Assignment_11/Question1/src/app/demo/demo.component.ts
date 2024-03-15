import { Component } from '@angular/core';
import { ArithmaticService } from '../arithmatic.service';
@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers:[ArithmaticService]
})
export class DemoComponent {
  public value:number=0;

  constructor(private obj:ArithmaticService){
    this.value=this.obj.Addition(45,5);
    this.value=this.obj.Subtraction(45,5);
  }

}
