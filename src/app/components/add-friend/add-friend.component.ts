import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons';

import { Friend } from 'src/app/shared/models/friend.model';
import { FriendsService } from 'src/app/shared/services/friends.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css'],
})
export class AddFriendComponent implements OnInit {
  uid = JSON.parse(window.localStorage.getItem('user')).uid;
  currentYear = new Date().getFullYear();

  @ViewChild('f') addFriendForm: NgForm;
  faChevronLeft = faChevronLeft;
  faPlus = faPlus;
  friend: Friend = {
    fullName: '',
    birthdate: null,
    imgUrl: '',
    favSnack: '',
    giftIdea: '',
    dreamDay: '',
    uid: this.uid,
    _id: '',
  };

  constructor(private friendsService: FriendsService) {}

  ngOnInit(): void {
    document
      .getElementById('birthdate')
      .setAttribute('min', this.currentYear + '-01-01');
    document
      .getElementById('birthdate')
      .setAttribute('max', this.currentYear + '-12-31');
  }

  onSubmit() {
    if (this.uid) {
      this.friend.fullName = this.addFriendForm.value.fullName;
      this.friend.birthdate =
        new Date(this.addFriendForm.value.birthdate).getTime() + 100000000;
      this.friend.imgUrl = `../../../assets/${this.addFriendForm.value.imgUrl}`;
      this.friend.favSnack = this.addFriendForm.value.favSnack;
      this.friend.giftIdea = this.addFriendForm.value.giftIdea;
      this.friend.dreamDay = this.addFriendForm.value.dreamDay;
      console.log(this.friend);
    } else {
      console.log("There's no uid");
    }

    this.friendsService.addFriend(this.friend);
    console.log('Did send');
  }
}
