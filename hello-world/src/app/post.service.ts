import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
interface postStructure {
  userId: number;
  id: number;
  title: string;
  body: string;
}
@Injectable()
export class PostService {
  private url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}
  getPosts() {
    return this.http.get<postStructure[]>(this.url);
  }
  updatePosts(post: postStructure) {
    const body = { title: 'updated title' };
    return this.http.put<postStructure>(this.url + '/' + post.id, body);
  }
  deletePosts(post: postStructure) {
    return this.http.delete(this.url + '/' + post.id);
  }
  createPosts(title: HTMLInputElement) {
    return this.http.post<postStructure>(this.url, {
      title: title.value,
    });
  }
}
