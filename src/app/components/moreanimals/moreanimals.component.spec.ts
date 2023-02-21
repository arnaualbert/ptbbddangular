import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreanimalsComponent } from './moreanimals.component';

describe('MoreanimalsComponent', () => {
  let component: MoreanimalsComponent;
  let fixture: ComponentFixture<MoreanimalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreanimalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreanimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
