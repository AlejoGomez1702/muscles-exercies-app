import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercisesRoutingModule } from './exercises-routing.module';
import { ListAllExercisesComponent } from './pages/list-all-exercises/list-all-exercises.component';
import { SharedModule } from '../shared/shared.module';
import { CreateExerciseComponent } from './pages/create-exercise/create-exercise.component';


@NgModule({
  declarations: [
    ListAllExercisesComponent,
    CreateExerciseComponent
  ],
  imports: [
    CommonModule,
    ExercisesRoutingModule,
    SharedModule
  ]
})
export class ExercisesModule { }
