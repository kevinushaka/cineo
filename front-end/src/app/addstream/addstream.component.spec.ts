import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstreamComponent } from './addstream.component';

describe('AddstreamComponent', () => {
  let component: AddstreamComponent;
  let fixture: ComponentFixture<AddstreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddstreamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
