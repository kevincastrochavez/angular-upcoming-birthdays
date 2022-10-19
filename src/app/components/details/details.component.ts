import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  friend;
  id: string;

  faChevronLeft = faChevronLeft;
  faPen = faPen;
  faTrash = faTrash;

  constructor(
    private friendsService: FriendsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = window.location.href.split('/')[4];

    this.friendsService.getFriend(this.id).subscribe((friend) => {
      this.friend = { ...friend.data(), _id: friend.id };
      this.friend;

      this.birthdateDay = Number(this.friend.birthdate);

      if (this.currentDay > this.birthdateDay) {
        this.countDown =
          Math.floor((this.birthdateDay - this.currentDay) / 1000 / 3600 / 24) +
          365;
      } else {
        this.countDown = Math.floor(
          (this.birthdateDay - this.currentDay) / 1000 / 3600 / 24
        );
      }
    });
  }

  onDelete() {
    this.friendsService.deleteFriend(this.id);
    this.router.navigate(['../../all'], { relativeTo: this.route });
  }
}
