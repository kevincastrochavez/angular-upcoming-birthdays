import { Component, OnInit } from '@angular/core';
import {
  faGift,
  faCookieBite,
  faUmbrellaBeach,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.css'],
})
export class DetailsCardComponent implements OnInit {
  faGift = faGift;
  faCookieBite = faCookieBite;
  faUmbrellaBeach = faUmbrellaBeach;

  constructor() {}

  ngOnInit(): void {}
}
