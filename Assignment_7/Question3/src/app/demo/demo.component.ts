import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  public displayText:string="Marvellous Infosystems";
  public fun(){
    this.displayText="Educating for Better tomorrow";
  }

}
