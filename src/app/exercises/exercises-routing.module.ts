import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAllExercisesComponent } from './pages/list-all-exercises/list-all-exercises.component';
import { CreateExerciseComponent } from './pages/create-exercise/create-exercise.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'all',
        component: ListAllExercisesComponent
      },
      {
        path: 'create',
        component: CreateExerciseComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercisesRoutingModule { }
