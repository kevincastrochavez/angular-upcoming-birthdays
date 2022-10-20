import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faChevronLeft, faPen } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';

import { Friend } from 'src/app/shared/models/friend.model';
import { FriendsService } from 'src/app/shared/services/friends.service';

@Component({
  selector: 'app-edit-friend',
  templateUrl: './edit-friend.component.html',
  styleUrls: ['./edit-friend.component.css'],
})
export class EditFriendComponent implements OnInit {
  @ViewChild('f') updateFriendForm: NgForm;
  updatedFriend: Friend;
  currentFriend;
  friend;
  loading: boolean;
  imgUrl: string;
  id: string;

  faChevronLeft = faChevronLeft;
  faPen = faPen;

  constructor(
    private friendsService: FriendsService,
    private router: Router,
    private route: ActivatedRoute,
    private fireStorage: AngularFireStorage
  ) {}

  ngOnInit(): void {
    this.loading = false;
    this.id = window.location.href.split('/')[4];

    this.friendsService.getFriend(this.id).subscribe((friend) => {
      this.currentFriend = friend.data();

      this.updatedFriend = {
        fullName: '',
        birthdate: null,
        imgUrl: '',
        favSnack: '',
        giftIdea: '',
        dreamDay: '',
        uid: this.currentFriend.uid,
        _id: this.currentFriend._id,
      };

      this.friend = {
        fullName: this.currentFriend.fullName,
        birthdate: moment(this.currentFriend.birthdate).format('YYYY-MM-DD'),
        favSnack: this.currentFriend.favSnack,
        giftIdea: this.currentFriend.giftIdea,
        dreamDay: this.currentFriend.dreamDay,
        uid: this.currentFriend.uid,
        _id: this.currentFriend._id,
      };
    });
  }

  async onSubmit() {
    this.loading = true;

    const storageRef = this.fireStorage.ref(this.friend._id);

    await storageRef.getDownloadURL().subscribe((donwloadUrl) => {
      this.updatedFriend.fullName = this.updateFriendForm.value.fullName;
      this.updatedFriend.birthdate =
        new Date(this.updateFriendForm.value.birthdate).getTime() + 100000000;
      this.updatedFriend.favSnack = this.updateFriendForm.value.favSnack;
      this.updatedFriend.giftIdea = this.updateFriendForm.value.giftIdea;
      this.updatedFriend.dreamDay = this.updateFriendForm.value.dreamDay;
      this.updatedFriend.imgUrl = donwloadUrl;

      console.log(this.currentFriend._id);
      console.log(this.id);
      console.log(this.updatedFriend);

      this.friendsService.updateFriend(this.id, this.updatedFriend);
    });

    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
