import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faChevronLeft, faPen } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';

import { Friend } from 'src/app/shared/models/friend.model';
import { FriendsService } from 'src/app/shared/services/friends.service';

@Component({
  selector: 'app-edit-friend',
  templateUrl: './edit-friend.component.html',
  styleUrls: ['./edit-friend.component.css'],
})
export class EditFriendComponent implements OnInit {
  @ViewChild('f') updateFriendForm: NgForm;
  updatedFriend: Friend;
  currentFriend: Friend;
  friend: Friend;
  id: string;

  faChevronLeft = faChevronLeft;
  faPen = faPen;

  constructor(
    private friendsService: FriendsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = window.location.href.split('/')[4];

    this.friendsService.getFriend(this.id).subscribe((friend: Friend) => {
      this.currentFriend = friend;

      this.updatedFriend = {
        fullName: '',
        birthdate: null,
        imgUrl: '',
        favSnack: '',
        giftIdea: '',
        dreamDay: '',
        uid: this.currentFriend.uid,
        _id: this.currentFriend._id,
      };

      this.friend = {
        fullName: this.currentFriend.fullName,
        birthdate: moment(this.currentFriend.birthdate).format('YYYY-MM-DD'),
        imgUrl: this.currentFriend.imgUrl.split('/')[4].split('.')[0],
        favSnack: this.currentFriend.favSnack,
        giftIdea: this.currentFriend.giftIdea,
        dreamDay: this.currentFriend.dreamDay,
        uid: this.currentFriend.uid,
        _id: this.currentFriend._id,
      };
    });
  }

  onSubmit() {
    this.updatedFriend.fullName = this.updateFriendForm.value.fullName;
    this.updatedFriend.birthdate =
      new Date(this.updateFriendForm.value.birthdate).getTime() + 100000000;
    this.updatedFriend.imgUrl = `../../../assets/${this.updateFriendForm.value.imgUrl}.jpeg`;
    this.updatedFriend.favSnack = this.updateFriendForm.value.favSnack;
    this.updatedFriend.giftIdea = this.updateFriendForm.value.giftIdea;
    this.updatedFriend.dreamDay = this.updateFriendForm.value.dreamDay;

    this.friendsService.updateFriend(this.id, this.updatedFriend);
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
