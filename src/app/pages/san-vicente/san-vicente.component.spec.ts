import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanVicenteComponent } from './san-vicente.component';

describe('SanVicenteComponent', () => {
  let component: SanVicenteComponent;
  let fixture: ComponentFixture<SanVicenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanVicenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanVicenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
