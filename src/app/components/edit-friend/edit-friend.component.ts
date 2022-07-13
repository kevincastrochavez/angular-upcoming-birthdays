import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-friend',
  templateUrl: './edit-friend.component.html',
  styleUrls: ['./edit-friend.component.css'],
})
export class EditFriendComponent implements OnInit {
  faChevronLeft = faChevronLeft;
  faPen = faPen;
  friend = {
    fullName: 'Kevin',
    birthdate: '2022-07-08',
    imgUrl: 'pic.jpg',
    favSnack: 'Chips',
    giftIdea: 'Jeans',
    dreamDay: 'This is a description',
  };

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('Hi');
  }
}
