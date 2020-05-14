import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DleComponent } from './dle.component';

describe('DleComponent', () => {
  let component: DleComponent;
  let fixture: ComponentFixture<DleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
