import { ComponentFixture, TestBed } from '@angular/core/testing';

import { 404Component } from './404.component';

describe('404Component', () => {
  let component: 404Component;
  let fixture: ComponentFixture<404Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [404Component]
    });
    fixture = TestBed.createComponent(404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
