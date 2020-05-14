import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintMarksheetComponent } from './print-marksheet.component';

describe('PrintMarksheetComponent', () => {
  let component: PrintMarksheetComponent;
  let fixture: ComponentFixture<PrintMarksheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintMarksheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintMarksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
