import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardSideBarComponent } from './board-side-bar.component';

describe('BoardSideBarComponent', () => {
  let component: BoardSideBarComponent;
  let fixture: ComponentFixture<BoardSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
