import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendVolunteerComponent } from './friend-volunteer.component';

describe('FriendVolunteerComponent', () => {
  let component: FriendVolunteerComponent;
  let fixture: ComponentFixture<FriendVolunteerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendVolunteerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
