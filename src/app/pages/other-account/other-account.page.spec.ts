import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtherAccountPage } from './other-account.page';

describe('Tab3Page', () => {
  let component: OtherAccountPage;
  let fixture: ComponentFixture<OtherAccountPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [OtherAccountPage],
    }).compileComponents();

    fixture = TestBed.createComponent(OtherAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
