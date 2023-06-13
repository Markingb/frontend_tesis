import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariopEditComponent } from './usuariop-edit.component';

describe('UsuariopEditComponent', () => {
  let component: UsuariopEditComponent;
  let fixture: ComponentFixture<UsuariopEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuariopEditComponent]
    });
    fixture = TestBed.createComponent(UsuariopEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
