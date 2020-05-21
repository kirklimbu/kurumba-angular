import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassxComponent } from './classx.component';

describe('ClassxComponent', () => {
  let component: ClassxComponent;
  let fixture: ComponentFixture<ClassxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
