import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaShowingComponent } from './schema-showing.component';

describe('SchemaShowingComponent', () => {
  let component: SchemaShowingComponent;
  let fixture: ComponentFixture<SchemaShowingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchemaShowingComponent]
    });
    fixture = TestBed.createComponent(SchemaShowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
