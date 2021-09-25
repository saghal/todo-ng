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
  private url: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {
    this.http.get<postStructure[]>(this.url).subscribe((response) => {
      this.posts = response;
    });
  }

  onClick(post: object): void {
    console.log(post);
  }
  createPost(title: HTMLInputElement): void {
    this.http
      .post<postStructure>(this.url, {
        title: title.value,
      })
      .subscribe((response) => {
        this.posts.splice(0, 0, response);
      });
    console.log('in create post');
  }
  ngOnInit(): void {}
}
