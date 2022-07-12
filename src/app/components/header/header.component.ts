import { Component, OnInit } from '@angular/core';
import {
  faCakeCandles,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  faCakeCandles = faCakeCandles;
  faRightFromBracket = faRightFromBracket;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
