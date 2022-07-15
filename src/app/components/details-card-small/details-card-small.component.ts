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

  faGift = faGift;
  faCookieBite = faCookieBite;

  constructor() {}

  ngOnInit(): void {
    console.log(this.friend);
  }
}
