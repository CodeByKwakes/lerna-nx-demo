import { async, TestBed } from '@angular/core/testing';
import { WeaponModule } from './weapon.module';

describe('WeaponModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WeaponModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WeaponModule).toBeDefined();
  });
});
