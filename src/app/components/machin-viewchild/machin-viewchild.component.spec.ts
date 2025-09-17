import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinViewchildComponent } from './machin-viewchild.component';

describe('MachinViewchildComponent', () => {
  let component: MachinViewchildComponent;
  let fixture: ComponentFixture<MachinViewchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachinViewchildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachinViewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
