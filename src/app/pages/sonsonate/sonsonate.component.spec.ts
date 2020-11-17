import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonsonateComponent } from './sonsonate.component';

describe('SonsonateComponent', () => {
  let component: SonsonateComponent;
  let fixture: ComponentFixture<SonsonateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonsonateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonsonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
