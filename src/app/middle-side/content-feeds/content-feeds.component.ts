import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-feeds',
  templateUrl: './content-feeds.component.html',
  styleUrls: ['./content-feeds.component.scss'],
})
export class ContentFeedsComponent implements OnInit {
  number_of_likes: number;
  constructor() {}

  ngOnInit(): void {
    localStorage.setItem('likes', '0');
    this.number_of_likes = parseInt(localStorage.getItem('likes'));
  }
  addLikes() {
    this.number_of_likes = this.number_of_likes + 1;
    localStorage.setItem('likes', this.number_of_likes.toString());
  }
}
