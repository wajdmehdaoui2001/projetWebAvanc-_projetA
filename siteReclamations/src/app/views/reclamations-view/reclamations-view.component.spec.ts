import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationsViewComponent } from './reclamations-view.component';

describe('ReclamationsViewComponent', () => {
  let component: ReclamationsViewComponent;
  let fixture: ComponentFixture<ReclamationsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReclamationsViewComponent]
    });
    fixture = TestBed.createComponent(ReclamationsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
