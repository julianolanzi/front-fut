import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPlayerComponent } from './account-player.component';

describe('AccountPlayerComponent', () => {
  let component: AccountPlayerComponent;
  let fixture: ComponentFixture<AccountPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountPlayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
