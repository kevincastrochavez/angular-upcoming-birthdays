import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Friend } from 'src/app/shared/models/friend.model';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css'],
})
export class AddFriendComponent implements OnInit {
  uid = JSON.parse(window.localStorage.getItem('user')).uid;
  @ViewChild('f') addFriendForm: NgForm;
  faChevronLeft = faChevronLeft;
  faPlus = faPlus;
  friend: Friend = {
    fullName: '',
    birthdate: '',
    imgUrl: '',
    favSnack: '',
    giftIdea: '',
    dreamDay: '',
    uid: this.uid,
    _id: '',
  };

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.uid) {
      this.friend.fullName = this.addFriendForm.value.fullName;
      this.friend.birthdate = this.addFriendForm.value.birthdate;
      this.friend.imgUrl = this.addFriendForm.value.imgUrl;
      this.friend.favSnack = this.addFriendForm.value.favSnack;
      this.friend.giftIdea = this.addFriendForm.value.giftIdea;
      this.friend.dreamDay = this.addFriendForm.value.dreamDay;
      console.log(this.friend);
    } else {
      console.log("There's no uid");
    }
  }
}
