import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  public name:string="";

  public funUpper(){
    this.name="MARVELLOUS INFOSYSTEMS";
  }
  public funLower(){
    this.name="marvellous infosystems";
  }
}
