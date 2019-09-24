import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  offer: Place

  constructor(
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService,
    private router: Router
    ) { }

  ngOnInit() {
    this.onGetPlaceOffer()
  }

  onGetPlaceOffer() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('placeId')) {
        this.router.navigate(['/', 'places','tabs', 'offers'])
        return
      }
      const placeId = paramMap.get('placeId')
      this.offer = this.placesService.getPlace(placeId)
    })
  }
}
