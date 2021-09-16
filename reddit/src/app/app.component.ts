<<<<<<< HEAD
=======
import { Article } from './article/article.model';
>>>>>>> 59cd25946cc48dc87ba8da939076c7812fbe0865
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  title = 'reddit';
=======
  articles :Article[];
  title = 'reddit';
  addArticle(link:HTMLInputElement, title: HTMLInputElement): boolean {
    console.log(`added Link: ${link.value}, added Title: ${title.value}`);
    this.articles.push(new Article(title.value, link.value))
    link.value = '';
    title.value = '';
    return false;
  }
>>>>>>> 59cd25946cc48dc87ba8da939076c7812fbe0865
}
