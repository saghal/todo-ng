import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface postStructure {
  userId: number;
  id: number;
  title: string;
  body: string;
}
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: postStructure[];
  constructor(private http: HttpClient) {
    this.http
      .get<postStructure[]>('https://jsonplaceholder.typicode.com/posts/')
      .subscribe((response) => {
        this.posts = response;
      });
  }

  onClick(post: object): void {
    console.log(post);
  }
  ngOnInit(): void {}
}
