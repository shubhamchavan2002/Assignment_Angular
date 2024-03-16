import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { InvalidPageComponent } from './invalid-page/invalid-page.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,BooksComponent,TechnologiesComponent,InvalidPageComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Question3';
}
