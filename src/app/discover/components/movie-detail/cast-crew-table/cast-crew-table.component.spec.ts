import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastCrewTableComponent } from './cast-crew-table.component';

describe('CastCrewTableComponent', () => {
  let component: CastCrewTableComponent;
  let fixture: ComponentFixture<CastCrewTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CastCrewTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CastCrewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
