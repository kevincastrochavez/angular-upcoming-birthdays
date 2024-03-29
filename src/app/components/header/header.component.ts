import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  user: boolean = false;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.user = this.authService.isLoggedIn;
  }

  signOut() {
    this.authService.SignOut();
    this.user = false;
  }
}
