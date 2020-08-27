import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IncentivesPage } from './incentives.page';

describe('IncentivesPage', () => {
  let component: IncentivesPage;
  let fixture: ComponentFixture<IncentivesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncentivesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IncentivesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
