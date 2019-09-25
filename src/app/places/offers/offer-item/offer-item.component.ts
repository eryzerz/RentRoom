import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../../place.model';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss'],
})
export class OfferItemComponent implements OnInit {
  @Input() item: Place

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {}

  onEdit(id: string, sliderCtrl: IonItemSliding) {
    this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', id])
    sliderCtrl.close()
  }

}
