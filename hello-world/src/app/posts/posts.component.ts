import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any;
  constructor(private http: HttpClient) {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe((response) => {
        this.posts = response;
      });
  }

  onClick(post: object): void {
    console.log(post);
  }
  ngOnInit(): void {}
}
