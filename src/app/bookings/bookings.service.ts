import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  private _bookings: Booking[] = [
    new Booking('1', '2', '0', 'Bogor Central Palace', 628512345678910),
    new Booking('2', '3', '2', 'Jakarta King Palace', 628512345678967),
    new Booking('3', '1', '1', 'Magelang Mansion', 628512345678821),
  ]

  constructor() { }

  get bookings() {
    return this._bookings
  }
}
