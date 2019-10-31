import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRootComponent } from './admin-root.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AdminRootComponent', () => {
  let component: AdminRootComponent;
  let fixture: ComponentFixture<AdminRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRootComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
