import { Component, OnInit } from '@angular/core';
import { faGift } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-details-card-list',
  templateUrl: './details-card-list.component.html',
  styleUrls: ['./details-card-list.component.css'],
})
export class DetailsCardListComponent implements OnInit {
  faGift = faGift;

  constructor() {}

  ngOnInit(): void {}
}
