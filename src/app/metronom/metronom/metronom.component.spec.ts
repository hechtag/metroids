import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetronomComponent } from './metronom.component';

describe('MetronomComponent', () => {
  let component: MetronomComponent;
  let fixture: ComponentFixture<MetronomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetronomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetronomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
