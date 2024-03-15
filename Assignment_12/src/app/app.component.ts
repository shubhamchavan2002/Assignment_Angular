import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';


import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ReactiveFormsModule,MatDatepickerModule,MatInputModule,MatFormFieldModule,BsDropdownModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[provideNativeDateAdapter()]
})
export class AppComponent {
  title = 'Assignment_12';
}

