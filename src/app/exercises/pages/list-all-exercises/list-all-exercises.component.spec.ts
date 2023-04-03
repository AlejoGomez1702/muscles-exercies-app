import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllExercisesComponent } from './list-all-exercises.component';

describe('ListAllExercisesComponent', () => {
  let component: ListAllExercisesComponent;
  let fixture: ComponentFixture<ListAllExercisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllExercisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAllExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
