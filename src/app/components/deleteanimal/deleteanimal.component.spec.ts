import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteanimalComponent } from './deleteanimal.component';

describe('DeleteanimalComponent', () => {
  let component: DeleteanimalComponent;
  let fixture: ComponentFixture<DeleteanimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteanimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteanimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
