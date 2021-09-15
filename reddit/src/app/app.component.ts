import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reddit';
  addArticle(link:HTMLInputElement, title: HTMLInputElement): boolean {
    console.log(`added Link: ${link.value}, added Title: ${title.value}`);
    return false;
  }
}
