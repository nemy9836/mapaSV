import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccidentalComponent } from './occidental.component';

describe('OccidentalComponent', () => {
  let component: OccidentalComponent;
  let fixture: ComponentFixture<OccidentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccidentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccidentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
