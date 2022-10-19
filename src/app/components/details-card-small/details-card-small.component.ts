import { Component, Input, OnInit } from '@angular/core';
import { faGift, faCookieBite } from '@fortawesome/free-solid-svg-icons';
import { Friend } from 'src/app/shared/models/friend.model';

@Component({
  selector: 'app-details-card-small',
  templateUrl: './details-card-small.component.html',
  styleUrls: ['./details-card-small.component.css'],
})
export class DetailsCardSmallComponent implements OnInit {
  @Input() friend: Friend;

  id: string;
  currentDay = new Date().getTime();
  birthdateDay: number;
  countDown: number;

  faGift = faGift;
  faCookieBite = faCookieBite;

  constructor() {}

  ngOnInit(): void {
    this.id = this.friend._id;

    this.birthdateDay = Number(this.friend.birthdate);
    console.log(new Date(this.birthdateDay));

    this.countDown = Math.floor(
      (this.birthdateDay - this.currentDay) / 1000 / 3600 / 24
    );
  }
}
