import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrdctListComponent } from './prdct-list.component';

describe('PrdctListComponent', () => {
  let component: PrdctListComponent;
  let fixture: ComponentFixture<PrdctListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrdctListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrdctListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
