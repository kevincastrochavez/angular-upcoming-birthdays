import { Component, OnInit } from '@angular/core';
import { faUserPlus, faUserGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  uid: string;

  faUserPlus = faUserPlus;
  faUserGroup = faUserGroup;
  constructor() {}

  ngOnInit(): void {
    this.uid = window.localStorage.getItem('user');
  }
}
