import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { NgForm } from '@angular/forms';
import { faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons';

import { Friend } from 'src/app/shared/models/friend.model';
import { FriendsService } from 'src/app/shared/services/friends.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css'],
})
export class AddFriendComponent implements OnInit {
  @ViewChild('f') addFriendForm: NgForm;
  uid = JSON.parse(window.localStorage.getItem('user')).uid;
  currentYear = new Date().getFullYear();
  path: String;
  imageName: String;
  loading: boolean;

  faChevronLeft = faChevronLeft;
  faPlus = faPlus;
  friend: Friend = {
    fullName: '',
    birthdate: null,
    imgUrl: '',
    favSnack: '',
    giftIdea: '',
    dreamDay: '',
    uid: this.uid,
    _id: '',
  };

  constructor(
    private friendsService: FriendsService,
    private fireStorage: AngularFireStorage
  ) {}

  ngOnInit(): void {
    document
      .getElementById('birthdate')
      .setAttribute('min', this.currentYear + '-01-01');
    document
      .getElementById('birthdate')
      .setAttribute('max', this.currentYear + '-12-31');
    this.loading = false;
  }

  upload($event) {
    this.path = $event.target.files[0];
    this.imageName = $event.target.files[0].name;
  }

  async onSubmit() {
    this.loading = true;

    if (this.uid) {
      this.friend.fullName = this.addFriendForm.value.fullName;
      this.friend.birthdate =
        new Date(this.addFriendForm.value.birthdate).getTime() + 100000000;
      this.friend.favSnack = this.addFriendForm.value.favSnack;
      this.friend.giftIdea = this.addFriendForm.value.giftIdea;
      this.friend.dreamDay = this.addFriendForm.value.dreamDay;
    } else {
      console.log("There's no uid");
    }

    const fullImgName = `${this.uid}${this.imageName}`;

    await this.fireStorage.upload(fullImgName, this.path);

    const storageRef = this.fireStorage.ref(fullImgName);

    await storageRef.getDownloadURL().subscribe((donwloadUrl) => {
      this.friend.imgUrl = donwloadUrl;
    });

    await this.friendsService
      .addFriend(this.friend)
      .then(() => (this.loading = false));

    this.addFriendForm.reset();
  }
}
