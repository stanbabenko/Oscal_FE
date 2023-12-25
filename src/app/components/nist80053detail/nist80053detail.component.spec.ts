import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nist80053detailComponent } from './nist80053detail.component';

describe('Nist80053detailComponent', () => {
  let component: Nist80053detailComponent;
  let fixture: ComponentFixture<Nist80053detailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nist80053detailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Nist80053detailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
