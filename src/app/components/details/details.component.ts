import { Component, OnInit } from '@angular/core';
import {
  faChevronLeft,
  faPen,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { Friend } from 'src/app/shared/models/friend.model';
import { FriendsService } from 'src/app/shared/services/friends.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  currentDay = new Date().getTime();
  birthdateDay: number;
  countDown: number;
  friend: Friend;
  id: string;

  faChevronLeft = faChevronLeft;
  faPen = faPen;
  faTrash = faTrash;

  constructor(private friendsService: FriendsService) {}

  ngOnInit(): void {
    this.id = window.location.href.split('/')[4];

    this.friendsService.getFriend(this.id).subscribe((friend: Friend) => {
      this.friend = friend;

      this.birthdateDay = Number(this.friend.birthdate);
      console.log(this.birthdateDay);
      console.log(this.currentDay);

      if (this.currentDay > this.birthdateDay) {
        this.countDown =
          Math.ceil((this.birthdateDay - this.currentDay) / 1000 / 3600 / 24) +
          365;
      } else {
        this.countDown = Math.ceil(
          (this.birthdateDay - this.currentDay) / 1000 / 3600 / 24
        );
      }
    });
  }
}
