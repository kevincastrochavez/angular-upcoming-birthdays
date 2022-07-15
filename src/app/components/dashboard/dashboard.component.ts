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
  next5Friends: Friend[] = [];

  constructor(private friendsService: FriendsService) {}

  ngOnInit(): void {
    this.friendsService.getFriends().subscribe(
      (friends: Friend[]) => {
        this.friends = friends;
        console.log(this.friends);

        this.friends.map((friend, index) => {
          if (index <= 5 && index != 0) {
            this.next5Friends.push(friend);
          }
        });

        console.log(this.next5Friends);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
