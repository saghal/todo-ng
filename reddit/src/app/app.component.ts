import { Article } from './article/article.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles :Article[];
  title = 'reddit';
  addArticle(link:HTMLInputElement, title: HTMLInputElement): boolean {
    console.log(`added Link: ${link.value}, added Title: ${title.value}`);
    this.articles.push(new Article(title.value, link.value))
    link.value = '';
    title.value = ''
    return false;
  }
}
