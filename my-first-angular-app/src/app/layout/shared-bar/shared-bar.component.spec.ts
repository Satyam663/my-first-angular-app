import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedBarComponent } from './shared-bar.component';

describe('SharedBarComponent', () => {
  let component: SharedBarComponent;
  let fixture: ComponentFixture<SharedBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
