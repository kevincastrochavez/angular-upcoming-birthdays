import { Component, OnInit } from '@angular/core';
import {
  faChevronLeft,
  faPen,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  faChevronLeft = faChevronLeft;
  faPen = faPen;
  faTrash = faTrash;

  constructor() {}

  ngOnInit(): void {}
}
