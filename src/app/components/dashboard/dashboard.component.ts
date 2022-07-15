import { Component, OnInit } from '@angular/core';
import { Friend } from 'src/app/shared/models/friend.model';

import { FriendsService } from '../../shared/services/friends.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  friends: Friend[] = [];
  nearestFriend: Friend;
  next5Friends: Friend[] = [];
  todaysDate: number = new Date().getTime();

  constructor(private friendsService: FriendsService) {}

  ngOnInit(): void {
    this.friendsService.getFriends().subscribe(
      (friends: Friend[]) => {
        this.friends = friends;
        console.log(this.friends);

        this.nearestFriend = this.friends.find(
          (friend) => Number(friend.birthdate) >= this.todaysDate
        );

        this.friends.map((friend, index) => {
          if (index != 0 && Number(friend.birthdate) >= this.todaysDate) {
            if (this.next5Friends.length <= 4) {
              this.next5Friends.push(friend);
            }
          }
        });

        console.log(this.nearestFriend);

        console.log(this.next5Friends);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
