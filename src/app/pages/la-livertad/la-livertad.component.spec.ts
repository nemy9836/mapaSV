import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaLivertadComponent } from './la-livertad.component';

describe('LaLivertadComponent', () => {
  let component: LaLivertadComponent;
  let fixture: ComponentFixture<LaLivertadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaLivertadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaLivertadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
