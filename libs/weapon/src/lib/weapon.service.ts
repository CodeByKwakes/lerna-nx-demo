import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeaponService {
  constructor() {}

  getMessage() {
    console.log('I am a weapon lol BREAKING CHANGE: new version');
  }
}
