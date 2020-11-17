import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuscatlanComponent } from './cuscatlan.component';

describe('CuscatlanComponent', () => {
  let component: CuscatlanComponent;
  let fixture: ComponentFixture<CuscatlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuscatlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuscatlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
