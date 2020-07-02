import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtComponent } from './ft.component';

describe('FtComponent', () => {
  let component: FtComponent;
  let fixture: ComponentFixture<FtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
