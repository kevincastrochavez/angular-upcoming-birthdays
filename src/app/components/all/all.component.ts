import { Component, OnInit } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
})
export class AllComponent implements OnInit {
  faChevronLeft = faChevronLeft;

  constructor() {}

  ngOnInit(): void {}
}
