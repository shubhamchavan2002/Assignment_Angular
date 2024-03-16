import { Routes } from '@angular/router';
import { TechnologiesComponent } from './technologies/technologies.component';
import { BooksComponent } from './books/books.component';
import { InvalidPageComponent } from './invalid-page/invalid-page.component';

export const routes: Routes = [
  {path:'',component:TechnologiesComponent},
  {path:'technologies',component:TechnologiesComponent},
  {path:'books',component:BooksComponent},
  {path:'**',component:InvalidPageComponent}
];
