import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSuccsessComponent } from './register-succsess.component';

describe('RegisterSuccsessComponent', () => {
  let component: RegisterSuccsessComponent;
  let fixture: ComponentFixture<RegisterSuccsessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSuccsessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSuccsessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
