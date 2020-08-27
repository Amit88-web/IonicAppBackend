import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeliveringPage } from './delivering.page';

describe('DeliveringPage', () => {
  let component: DeliveringPage;
  let fixture: ComponentFixture<DeliveringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveringPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeliveringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
