import { Component, OnInit } from '@angular/core';
import { Person } from '../controller/model/person.model';

@Component({
  selector: 'app-side-bar2',
  templateUrl: './side-bar2.component.html',
  styleUrls: ['./side-bar2.component.scss'],
})
export class SideBar2Component implements OnInit {
  public persons: Array<Person> = [
    {
      id: 1,
      nom: 'Sarah',
      status: 'follow',
      username: '@dr.sarah',
      photo: '../../assets/images/profile1.jpg',
    },
    {
      id: 2,
      nom: 'Arthur',
      status: 'unfollow',
      username: '@shelby',
      photo: '../../assets/images/profile2.jpg',
    },
    {
      id: 3,
      nom: 'Van D.',
      status: 'follow',
      username: '@vindiesel',
      photo: '../../assets/images/profile3.jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
