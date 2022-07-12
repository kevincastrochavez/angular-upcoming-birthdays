import { Component, OnInit } from '@angular/core';
import { faGift, faCookieBite } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-details-card-small',
  templateUrl: './details-card-small.component.html',
  styleUrls: ['./details-card-small.component.css'],
})
export class DetailsCardSmallComponent implements OnInit {
  faGift = faGift;
  faCookieBite = faCookieBite;

  constructor() {}

  ngOnInit(): void {}
}
