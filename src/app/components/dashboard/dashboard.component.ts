import { Component, OnInit } from '@angular/core';
import { Friend } from 'src/app/shared/models/friend.model';

import { FriendsService } from '../../shared/services/friends.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  todaysDate: number = new Date().getTime();
  next5Friends: Friend[] = [];
  friends: any = [];
  nearestFriend: Friend;

  constructor(private friendsService: FriendsService) {}

  ngOnInit(): void {
    this.friendsService.getFriends().subscribe(
      (friends) => {
        friends.docs.forEach((doc) =>
          this.friends.push({ ...doc.data(), _id: doc.id })
        );
        console.log(this.friends);

        this.nearestFriend = this.friends.find(
          (friend) => Number(friend.birthdate) >= this.todaysDate
        );

        this.friends.map((friend, index) => {
          if (Number(friend.birthdate) >= this.todaysDate) {
            if (this.next5Friends.length <= 5) {
              this.next5Friends.push(friend);
            }
          }
        });

        const numberOfFriendsNextYear = 6 - this.next5Friends.length;

        const friendsNextYear = this.friends.slice(0, numberOfFriendsNextYear);
        const YEAR_IN_MILISECONDS = 31540000000;

        if (this.next5Friends.length < 5) {
          friendsNextYear.map((friend) => {
            if (
              friend != this.nearestFriend &&
              !this.next5Friends.includes(friend)
            ) {
              this.next5Friends.push(friend);
              friend.birthdate += YEAR_IN_MILISECONDS;
            }
          });
        }

        this.next5Friends.shift();
        console.log(this.next5Friends);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
