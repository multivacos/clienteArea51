import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearContribuyenteComponent } from './crear-contribuyente.component';

describe('CrearContribuyenteComponent', () => {
  let component: CrearContribuyenteComponent;
  let fixture: ComponentFixture<CrearContribuyenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearContribuyenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearContribuyenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
