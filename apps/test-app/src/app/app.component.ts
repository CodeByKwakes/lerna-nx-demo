import { Component } from '@angular/core';
import { WeaponService } from '@lerna-demo/weapon';

@Component({
  selector: 'ta-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Weapon X';

  constructor(private _weapon: WeaponService) {
    this._weapon.getMessage();
    _weapon.getNewMsg();
    console.log('fixed bug');
    this.getMessage();
  }

  getMessage() {
    console.log('this is NEW!!');
  }
}
