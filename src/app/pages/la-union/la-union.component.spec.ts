import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaUnionComponent } from './la-union.component';

describe('LaUnionComponent', () => {
  let component: LaUnionComponent;
  let fixture: ComponentFixture<LaUnionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaUnionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaUnionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
