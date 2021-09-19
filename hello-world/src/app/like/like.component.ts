import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent implements OnInit {
  @Input() likeStatus: boolean;
  @Input() likeCount: number;
  constructor() {}

  ngOnInit(): void {}
  onClick() {
    this.likeStatus = !this.likeStatus;
    this.likeCount += 1;
    this.likeCount %= 2;
  }
}
