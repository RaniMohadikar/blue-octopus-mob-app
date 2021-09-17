import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MemberWebpagePerformancePage } from './member-webpage-performance.page';

describe('MemberWebpagePerformancePage', () => {
  let component: MemberWebpagePerformancePage;
  let fixture: ComponentFixture<MemberWebpagePerformancePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberWebpagePerformancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MemberWebpagePerformancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
