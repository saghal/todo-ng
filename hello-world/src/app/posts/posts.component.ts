import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
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
  constructor(private postService: PostService) {}

  updatePost(post: postStructure): void {
    this.postService.updatePosts(post).subscribe((response) => {
      console.log('in update post :', response);
    });
    console.log(post);
  }
  deletePost(post: postStructure): void {
    this.postService.deletePosts(post).subscribe((response) => {
      console.log('on delete post :', response);
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }
  createPost(title: HTMLInputElement): void {
    this.postService.createPosts(title).subscribe((response) => {
      this.posts.splice(0, 0, response);
    });
    console.log('in create post');
  }
  ngOnInit(): void {
    this.postService.getPosts().subscribe((response) => {
      this.posts = response;
    });
  }
}
