import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketListItemComponent } from './cricket-list-item.component';

describe('CricketListItemComponent', () => {
  let component: CricketListItemComponent;
  let fixture: ComponentFixture<CricketListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CricketListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CricketListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
