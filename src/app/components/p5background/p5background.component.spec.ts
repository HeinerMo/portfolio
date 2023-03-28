import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P5backgroundComponent } from './p5background.component';

describe('P5backgroundComponent', () => {
  let component: P5backgroundComponent;
  let fixture: ComponentFixture<P5backgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P5backgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P5backgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
