import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsListComponent } from './artists-list.component';

describe('ArtistsListComponent', () => {
  let component: ArtistsListComponent;
  let fixture: ComponentFixture<ArtistsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
