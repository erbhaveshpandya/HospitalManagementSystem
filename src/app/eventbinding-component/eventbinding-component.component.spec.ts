import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventbindingComponentComponent } from './eventbinding-component.component';

describe('EventbindingComponentComponent', () => {
  let component: EventbindingComponentComponent;
  let fixture: ComponentFixture<EventbindingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventbindingComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventbindingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
