import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformLoginComponent } from './platform-login.component';

describe('PlatformLoginComponent', () => {
  let component: PlatformLoginComponent;
  let fixture: ComponentFixture<PlatformLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatformLoginComponent]
    });
    fixture = TestBed.createComponent(PlatformLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
