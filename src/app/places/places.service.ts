import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place('1', 'Magelang Mansion', 'The most comfortable place to live your life in Magelang', 'https://townsquare.media/site/204/files/2018/08/spectacular-celebrity-homes.jpg?w=980&q=75', 214.99),
    new Place('2', 'Bogor Central Palace', 'A Romantic place in West Java', 'https://mk0peerspacerest2v8e.kinstacdn.com/wp-content/uploads/Ultra-Modern-Huge-Mansion-with-Pool-and-Tennis-encino-la-los-angeles-rental-1200x600.jpg', 188.99),
    new Place('3', 'Jakarta King Palace', 'Luxury and expensive place to waste your money in a proper way', 'https://i.ytimg.com/vi/X8-dKsLVJq8/maxresdefault.jpg', 399.99)
  ]

  constructor() { }

  get places() {
    return [...this._places]
  }

  getPlace(id: string) {
    return {...this._places.find(place => place.id === id)}
  }
}
