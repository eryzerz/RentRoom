import { Component, OnInit } from '@angular/core';
import { Place } from '../../place.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  offer: Place

  constructor(
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.onGetEditOffer()
  }

  onGetEditOffer() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('placeId')) {
        this.router.navigate(['/', 'places', 'tabs', 'offers'])
        return
      }
      const placeId = paramMap.get('placeId')
      this.offer = this.placesService.getPlace(placeId)
    })
  }
}
