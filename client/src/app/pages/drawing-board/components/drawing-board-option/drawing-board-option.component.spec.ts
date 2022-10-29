import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawingBoardOptionComponent } from './drawing-board-option.component';

describe('DrawingBoardOptionComponent', () => {
  let component: DrawingBoardOptionComponent;
  let fixture: ComponentFixture<DrawingBoardOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawingBoardOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawingBoardOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
