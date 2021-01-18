import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiccaoCientificaComponent } from './ficcao-cientifica.component';

describe('FiccaoCientificaComponent', () => {
  let component: FiccaoCientificaComponent;
  let fixture: ComponentFixture<FiccaoCientificaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiccaoCientificaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiccaoCientificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
