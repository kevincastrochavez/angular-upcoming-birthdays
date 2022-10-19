import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
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
    this.uid = JSON.parse(window.localStorage.getItem('user')).uid;
  }
}
