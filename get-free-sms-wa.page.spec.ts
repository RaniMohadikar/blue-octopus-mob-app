import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetFreeSmsWaPage } from './get-free-sms-wa.page';

describe('GetFreeSmsWaPage', () => {
  let component: GetFreeSmsWaPage;
  let fixture: ComponentFixture<GetFreeSmsWaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GetFreeSmsWaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetFreeSmsWaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
