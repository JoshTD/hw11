import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddetComponent } from './adddet.component';

describe('AdddetComponent', () => {
  let component: AdddetComponent;
  let fixture: ComponentFixture<AdddetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
