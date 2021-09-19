import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  post = {
    title: 'Title',
    likesCount: 0,
    isFavorite: false,
  };
  onFavoriteChanged(isFavorite: FavoriteChangedEventArgs): void {
    console.log('ok button color changed!, ', isFavorite.newValue);
  }
}
