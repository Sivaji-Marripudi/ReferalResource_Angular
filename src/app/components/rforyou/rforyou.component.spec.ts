import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RforyouComponent } from './rforyou.component';

describe('RforyouComponent', () => {
  let component: RforyouComponent;
  let fixture: ComponentFixture<RforyouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RforyouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RforyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
