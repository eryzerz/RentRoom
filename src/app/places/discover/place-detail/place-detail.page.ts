import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../../place.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../../places.service';
import { NavController, ModalController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';

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
    private navCtrl: NavController,
    private modalCtrl: ModalController
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
    // this.navCtrl.navigateBack('/places/tabs/discover')
    this.modalCtrl.create({
      component: CreateBookingComponent,
      componentProps: {selectedPlace: this.place}
    }).then(modalElement => {
      modalElement.present()
      return modalElement.onDidDismiss()
    }).then(resultData => {
      console.log(resultData.data, resultData.role)
      if(resultData.role === 'confirm') {
        console.log(resultData.data.message)
      }
    })
  }
}
