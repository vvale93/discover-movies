import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastCrewAccordionComponent } from './cast-crew-accordion.component';

describe('CastCrewAccordionComponent', () => {
  let component: CastCrewAccordionComponent;
  let fixture: ComponentFixture<CastCrewAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CastCrewAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CastCrewAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
