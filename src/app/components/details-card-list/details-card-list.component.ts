import { Component, Input, OnInit } from '@angular/core';
import { faGift } from '@fortawesome/free-solid-svg-icons';

import { Friend } from 'src/app/shared/models/friend.model';

@Component({
  selector: 'app-details-card-list',
  templateUrl: './details-card-list.component.html',
  styleUrls: ['./details-card-list.component.css'],
})
export class DetailsCardListComponent implements OnInit {
  @Input() birthdatesArray: string[];
  @Input() friend: Friend;
  @Input() index: number;

  faGift = faGift;

  constructor() {}

  ngOnInit(): void {}
}
