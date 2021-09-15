import { Article } from './../article/article.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  articles : Article[];
  constructor() { 
    this.articles = [
      new Article("google","https://www.google.com"),
      new Article("telegram","https://www.t.me"),
      new Article("twitch","https://www.twitch.com")

    ]
  }

  ngOnInit(): void {
  }

}
