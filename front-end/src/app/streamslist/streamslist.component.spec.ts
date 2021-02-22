import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamslistComponent } from './streamslist.component';

describe('StreamslistComponent', () => {
  let component: StreamslistComponent;
  let fixture: ComponentFixture<StreamslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
