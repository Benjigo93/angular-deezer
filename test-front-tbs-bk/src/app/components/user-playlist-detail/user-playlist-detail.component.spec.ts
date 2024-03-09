import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPlaylistDetailComponent } from './user-playlist-detail.component';

describe('UserPlaylistDetailComponent', () => {
  let component: UserPlaylistDetailComponent;
  let fixture: ComponentFixture<UserPlaylistDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserPlaylistDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserPlaylistDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
