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
      `http://localhost:3000/v1/friends/${this.uid}`
      // `https://b-day-server.herokuapp.com/v1/friends/${this.uid}`
    );
  }

  getFriend(id: string) {
    return this.http.get<Friend>(
      `http://localhost:3000/v1/friends/${this.uid}/${id}`
    );
  }

  addFriend(newFriend: Friend) {
    if (!newFriend) return;

    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http
      .post<Friend>('http://localhost:3000/v1/friends', newFriend)
      .subscribe((friend) => this.friends.push(friend));
  }
}
