import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDisplayComponent } from './book-display.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BookDisplayComponent', () => {
  let component: BookDisplayComponent;
  let fixture: ComponentFixture<BookDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookDisplayComponent],
      imports: [RouterTestingModule, HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
