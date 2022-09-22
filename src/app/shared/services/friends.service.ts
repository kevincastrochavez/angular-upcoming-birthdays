import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Friend } from '../models/friend.model';

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  uid = JSON.parse(window.localStorage.getItem('user')).uid;
  friends: Friend[] = [];
  // localDbUrl = 'http://localhost:3000/v1/friends';
  remoteDbUrl = 'https://b-day-server.herokuapp.com/v1/friends';

  constructor(private http: HttpClient) {
    this.getFriends();
  }

  getFriends() {
    return this.http.get<Friend[]>(
      `${this.remoteDbUrl}/${this.uid}`
      // `https://b-day-server.herokuapp.com/v1/friends/${this.uid}`
    );
  }

  getFriend(id: string) {
    return this.http.get<Friend>(`${this.remoteDbUrl}/${this.uid}/${id}`);
  }

  addFriend(newFriend: Friend) {
    if (!newFriend) return;

    this.http
      .post<Friend>(`${this.remoteDbUrl}`, newFriend)
      .subscribe((friend) => this.friends.push(friend));
  }

  updateFriend(id: string, updatedFriend: Friend) {
    this.http
      .put<Friend>(`${this.remoteDbUrl}/${id}`, updatedFriend)
      .subscribe((friend) => this.friends.push(friend));
  }

  deleteFriend(id: string) {
    this.http
      .delete(`${this.remoteDbUrl}/${id}`)
      .subscribe((friends: Friend[]) => {
        this.friends = friends;
      });
  }
}
