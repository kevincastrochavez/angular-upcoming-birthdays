import { Component, OnInit } from '@angular/core';
import {
  faGift,
  faCookieBite,
  faUmbrellaBeach,
} from '@fortawesome/free-solid-svg-icons';

import { FriendsService } from 'src/app/shared/services/friends.service';
import { Friend } from 'src/app/shared/models/friend.model';

@Component({
  selector: 'app-spotlight-friend',
  templateUrl: './spotlight-friend.component.html',
  styleUrls: ['./spotlight-friend.component.css'],
})
export class SpotlightFriendComponent implements OnInit {
  todaysDate: number = new Date().getTime();
  friends: any = [];
  nearestFriend: Friend;
  birthdateDay: number;
  countDown: number;
  id: string;

  faGift = faGift;
  faCookieBite = faCookieBite;
  faUmbrellaBeach = faUmbrellaBeach;

  constructor(private friendsService: FriendsService) {}

  ngOnInit(): void {
    this.friendsService.getFriends().subscribe(
      (friends) => {
        friends.docs.forEach((doc) =>
          this.friends.push({ ...doc.data(), _id: doc.id })
        );

        this.nearestFriend = this.friends.find(
          (friend) => Number(friend.birthdate) >= this.todaysDate
        );
        console.log(this.nearestFriend);
        this.id = this.nearestFriend._id;
        this.birthdateDay = Number(this.nearestFriend.birthdate);
        this.countDown = Math.floor(
          (this.birthdateDay - this.todaysDate) / 1000 / 3600 / 24
        );
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
