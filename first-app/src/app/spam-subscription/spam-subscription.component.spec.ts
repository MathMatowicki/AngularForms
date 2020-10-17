import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpamSubscriptionComponent } from './spam-subscription.component';

describe('SpamSubscriptionComponent', () => {
  let component: SpamSubscriptionComponent;
  let fixture: ComponentFixture<SpamSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpamSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpamSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
