import { Component,Input,EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  @Input() public Bowl:any;
  @Output() public LaserLight=new EventEmitter;

  public SendMessage(){
    this.LaserLight.emit("Hello from child");
  }
}
