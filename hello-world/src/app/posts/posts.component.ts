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
  constructor(private http: HttpClient) {}

  updatePost(post: postStructure): void {
    const body = { title: 'updated title' };
    this.http
      .put<postStructure>(this.url + '/' + post.id, body)
      .subscribe((response) => {
        console.log('in update post :', response);
      });
    console.log(post);
  }
  deletePost(post: postStructure): void {
    this.http.delete(this.url + '/' + post.id).subscribe((response) => {
      console.log('on delete post :', response);
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
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
  ngOnInit(): void {
    this.http.get<postStructure[]>(this.url).subscribe((response) => {
      this.posts = response;
    });
  }
}
