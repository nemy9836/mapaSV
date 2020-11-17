import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChalatenangoComponent } from './chalatenango.component';

describe('ChalatenangoComponent', () => {
  let component: ChalatenangoComponent;
  let fixture: ComponentFixture<ChalatenangoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChalatenangoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChalatenangoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
