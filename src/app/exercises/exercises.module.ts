import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercisesRoutingModule } from './exercises-routing.module';
import { ListAllExercisesComponent } from './pages/list-all-exercises/list-all-exercises.component';


@NgModule({
  declarations: [
    ListAllExercisesComponent
  ],
  imports: [
    CommonModule,
    ExercisesRoutingModule
  ]
})
export class ExercisesModule { }
