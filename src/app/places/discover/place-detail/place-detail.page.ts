import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../../place.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../../places.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place

  constructor(
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService,
    private router: Router,
    private navCtrl: NavController
    ) { }

  ngOnInit() {
    this.onGetPlaceDetail()
  }

  onGetPlaceDetail() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('placeId')) {
        this.router.navigate(['/', 'places', 'tabs', 'discover'])
        return
      }
      const placeId = paramMap.get('placeId')
      this.place = this.placesService.getPlace(placeId)
    })
  }

  onBookPlace() {
    // this.router.navigate(['/', 'places', 'tabs', 'discover'])
    this.navCtrl.navigateBack('/places/tabs/discover')
  }
}
