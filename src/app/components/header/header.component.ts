import { Component, OnInit } from '@angular/core';
import {
  faCakeCandles,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  faCakeCandles = faCakeCandles;
  faRightFromBracket = faRightFromBracket;

  constructor() {}

  ngOnInit(): void {}
}
