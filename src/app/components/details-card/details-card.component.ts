import { Component, Input, OnInit } from '@angular/core';
import {
  faGift,
  faCookieBite,
  faUmbrellaBeach,
} from '@fortawesome/free-solid-svg-icons';

import { Friend } from 'src/app/shared/models/friend.model';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.css'],
})
export class DetailsCardComponent implements OnInit {
  @Input() friend: Friend;
  @Input() countDown: number;

  faGift = faGift;
  faCookieBite = faCookieBite;
  faUmbrellaBeach = faUmbrellaBeach;

  constructor() {}

  ngOnInit(): void {}
}
