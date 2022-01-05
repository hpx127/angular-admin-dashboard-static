import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrdctChgComponent } from './prdct-chg.component';

describe('PrdctChgComponent', () => {
  let component: PrdctChgComponent;
  let fixture: ComponentFixture<PrdctChgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrdctChgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrdctChgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
