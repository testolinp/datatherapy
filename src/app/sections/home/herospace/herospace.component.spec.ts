import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerospaceComponent } from './herospace.component';

describe('HerospaceComponent', () => {
  let component: HerospaceComponent;
  let fixture: ComponentFixture<HerospaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerospaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerospaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
