import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAllExercisesComponent } from './pages/list-all-exercises/list-all-exercises.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'all',
        component: ListAllExercisesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercisesRoutingModule { }
