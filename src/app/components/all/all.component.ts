import { Component, OnInit } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';

import { Friend } from 'src/app/shared/models/friend.model';
import { FriendsService } from 'src/app/shared/services/friends.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
})
export class AllComponent implements OnInit {
  friends: Friend[] = [];
  birthdatesArray: string[];

  faChevronLeft = faChevronLeft;

  constructor(private friendsService: FriendsService) {}

  ngOnInit(): void {
    this.friendsService.getFriends().subscribe((friends: Friend[]) => {
      this.friends = friends;

      this.birthdatesArray = this.friends.map((friend) => {
        const date = moment(Number(friend.birthdate)).format('MMMM DD');

        return date;
      });
    });
  }
}
