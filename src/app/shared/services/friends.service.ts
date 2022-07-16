import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Friend } from '../models/friend.model';

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  uid = JSON.parse(window.localStorage.getItem('user')).uid;
  friends: Friend[] = [];

  constructor(private http: HttpClient) {
    this.getFriends();
  }

  getFriends() {
    return this.http.get<Friend[]>(
      `https://b-day-server.herokuapp.com/v1/friends/${this.uid}`
    );
  }

  getFriend(id: string) {
    return this.http.get<Friend>(
      `https://b-day-server.herokuapp.com/v1/friends/${this.uid}/${id}`
    );
  }
}
