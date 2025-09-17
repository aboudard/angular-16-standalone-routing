import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynComponent } from './dyn.component';

describe('DynComponent', () => {
  let component: DynComponent;
  let fixture: ComponentFixture<DynComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
