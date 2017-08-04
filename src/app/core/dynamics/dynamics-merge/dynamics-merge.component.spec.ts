import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicsMergeComponent } from './dynamics-merge.component';

describe('DynamicsMergeComponent', () => {
  let component: DynamicsMergeComponent;
  let fixture: ComponentFixture<DynamicsMergeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicsMergeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicsMergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
