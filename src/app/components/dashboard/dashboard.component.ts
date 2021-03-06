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
  friends: Friend[] = [];
  nearestFriend: Friend;

  constructor(private friendsService: FriendsService) {}

  ngOnInit(): void {
    this.friendsService.getFriends().subscribe(
      (friends: Friend[]) => {
        this.friends = friends;

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

        this.next5Friends.shift();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
