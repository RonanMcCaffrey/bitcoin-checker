import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularTableComponent } from './regular-table.component';

describe('RegularTableComponent', () => {
  let component: RegularTableComponent;
  let fixture: ComponentFixture<RegularTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
