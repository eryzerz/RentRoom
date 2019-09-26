import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../../place.model';

@Component({
  selector: 'app-place-item',
  templateUrl: './place-item.component.html',
  styleUrls: ['./place-item.component.scss'],
})
export class PlaceItemComponent implements OnInit {
  @Input() placeItem: Place
  data = true

  constructor() { }

  ngOnInit() {
    this.data = false
    setTimeout(() => {
      this.data = true
    }, 2000);
  }

  ionViewWillEnter() {
  }
}
