import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariopListComponent } from './usuariop-list.component';

describe('UsuariopListComponent', () => {
  let component: UsuariopListComponent;
  let fixture: ComponentFixture<UsuariopListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuariopListComponent]
    });
    fixture = TestBed.createComponent(UsuariopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
