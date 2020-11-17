import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanMiguelComponent } from './san-miguel.component';

describe('SanMiguelComponent', () => {
  let component: SanMiguelComponent;
  let fixture: ComponentFixture<SanMiguelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanMiguelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanMiguelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
