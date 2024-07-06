import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountImgProfileComponent } from './account-img-profile.component';

describe('AccountImgProfileComponent', () => {
  let component: AccountImgProfileComponent;
  let fixture: ComponentFixture<AccountImgProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountImgProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountImgProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
