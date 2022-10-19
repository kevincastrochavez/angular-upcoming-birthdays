import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Friend } from '../models/friend.model';

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  uid = JSON.parse(window.localStorage.getItem('user')).uid;
  // localDbUrl = 'http://localhost:3000/v1/friends';
  // remoteDbUrl = 'https://b-day-server.herokuapp.com/v1/friends';
  userDocument = this.firestore.collection('users').doc(this.uid);

  constructor(private firestore: AngularFirestore) {
    this.getFriends();
  }

  getFriends() {
    return this.userDocument
      .collection('friends', (doc) => doc.orderBy('birthdate'))
      .get();
  }

  getFriend(id: string) {
    return this.userDocument.collection('friends').doc(id).get();
  }

  addFriend(newFriend: Friend) {
    if (!newFriend) return;

    this.userDocument.collection('friends').doc().set(newFriend);
  }

  updateFriend(id: string, updatedFriend: Friend) {
    this.userDocument.collection('friends').doc(id).update(updatedFriend);
  }

  deleteFriend(id: string) {
    this.userDocument.collection('friends').doc(id).delete();
  }
}
