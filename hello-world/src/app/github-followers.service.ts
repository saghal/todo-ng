import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GithubFollowersService {
  private url: string = 'https://api.github.com/users/saghal/followers';
  constructor(private http: HttpClient) {}

  getFollowers() {
    return this.http.get<any>(this.url);
  }
}
