import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  title = 'This is movies App Title';
  today = new Date();
  image = 'https://dotnethow.net/images/movies/movie-1.jpg';
  price = 10;
  sellingPrice = 15.39;
  finalPrice:number = 0;
}
