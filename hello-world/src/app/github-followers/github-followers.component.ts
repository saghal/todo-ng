import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../github-followers.service';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css'],
})
export class GithubFollowersComponent implements OnInit {
  followers: any;
  constructor(private gitFollowers: GithubFollowersService) {}

  ngOnInit(): void {
    this.gitFollowers.getFollowers().subscribe((response) => {
      console.log(response);
      this.followers = response;
    });
  }
}
