import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ExercisesService } from '../../services/exercises.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-exercise',
  templateUrl: './create-exercise.component.html',
  styleUrls: ['./create-exercise.component.css']
})
export class CreateExerciseComponent 
{
  public form: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['']
  });

  constructor(
    private fb: FormBuilder,
    private exercisesService: ExercisesService,
    private router: Router
  ){}

  addExercise()
  {
    console.log( this.form.value );
    this.exercisesService.createExercise( this.form.value ).then(
      exercise => {
        this.router.navigate(['/']);
      }
    ); 
  }

}
