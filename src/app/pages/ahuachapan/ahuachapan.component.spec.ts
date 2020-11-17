import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AhuachapanComponent } from './ahuachapan.component';

describe('AhuachapanComponent', () => {
  let component: AhuachapanComponent;
  let fixture: ComponentFixture<AhuachapanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhuachapanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhuachapanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
