import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/places/place.model';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place

  constructor(
    private modalCtrl: ModalController,
    private router: Router
  ) { }

  ngOnInit() {}

  dismissModal() {
    this.modalCtrl.dismiss(null, 'cancel')
  }

  onBookPlace() {
    this.router.navigate(['/bookings'])
    this.modalCtrl.dismiss({message: `${this.selectedPlace.title} has been booked`}, 'confirm')
  }
}
