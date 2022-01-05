import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulistComponent } from './culist.component';

describe('CulistComponent', () => {
  let component: CulistComponent;
  let fixture: ComponentFixture<CulistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CulistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CulistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
