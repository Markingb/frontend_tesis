import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariopCreateComponent } from './usuariop-create.component';

describe('UsuariopCreateComponent', () => {
  let component: UsuariopCreateComponent;
  let fixture: ComponentFixture<UsuariopCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuariopCreateComponent]
    });
    fixture = TestBed.createComponent(UsuariopCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
