import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDataComponent } from './show-data.component';

describe('ShowDataComponent', () => {
  let component: ShowDataComponent;
  let fixture: ComponentFixture<ShowDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowDataComponent]
    });
    fixture = TestBed.createComponent(ShowDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
