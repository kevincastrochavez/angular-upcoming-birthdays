import { Component, OnInit } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-friend',
  templateUrl: './edit-friend.component.html',
  styleUrls: ['./edit-friend.component.css'],
})
export class EditFriendComponent implements OnInit {
  faChevronLeft = faChevronLeft;

  constructor() {}

  ngOnInit(): void {}
}
