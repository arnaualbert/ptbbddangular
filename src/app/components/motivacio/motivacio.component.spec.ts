import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivacioComponent } from './motivacio.component';

describe('MotivacioComponent', () => {
  let component: MotivacioComponent;
  let fixture: ComponentFixture<MotivacioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotivacioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotivacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
