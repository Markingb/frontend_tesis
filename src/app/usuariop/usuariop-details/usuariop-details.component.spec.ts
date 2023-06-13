import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariopDetailsComponent } from './usuariop-details.component';

describe('UsuariopDetailsComponent', () => {
  let component: UsuariopDetailsComponent;
  let fixture: ComponentFixture<UsuariopDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuariopDetailsComponent]
    });
    fixture = TestBed.createComponent(UsuariopDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
