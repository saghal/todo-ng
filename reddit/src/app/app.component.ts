import { Article } from './article/article.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles : Article[];

  constructor(){
    this.articles = [
      new Article("google","https://www.google.com"),
      new Article("telegram","https://www.t.me"),
      new Article("twitch","https://www.twitch.com")

    ]
  }
}
