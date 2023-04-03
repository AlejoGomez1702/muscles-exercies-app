import { Component, OnInit } from '@angular/core';
import { Exercise } from '../../interfaces/Exercise';
import { ExercisesService } from '../../services/exercises.service';
import { Storage, ref, uploadBytes, getDownloadURL } from "@angular/fire/storage";

@Component({
  selector: 'app-list-all-exercises',
  templateUrl: './list-all-exercises.component.html',
  styleUrls: ['./list-all-exercises.component.css']
})
export class ListAllExercisesComponent implements OnInit
{
  public exercises: Exercise[] = [];

  constructor(
    private exercisesService: ExercisesService,
    private storage: Storage
  ){}

  ngOnInit(): void 
  {
    this.exercisesService.getAllExercises().subscribe(
      exercises => this.exercises = exercises
    );
  }

  onFileSelected( event: any, exercise: Exercise )
  {
    const exerciseId = exercise.id!;
    const file = event.target.files[0];

    const fileRef = ref( this.storage, `exercises/${file.name}` );
    uploadBytes( fileRef, file ).then(
      (resp) => {
        getDownloadURL( resp.ref ).then(
          url => {
            this.updateExerciseFile( exerciseId, url );
          }
        )
      }
    ).catch( error => {
      console.log(error);
    });

  }

  updateExerciseFile( exerciseId: string, fileUrl: string )
  {
    this.exercisesService.updateExerciseFile( exerciseId, fileUrl ).then(
      resp => {
        console.log("Actualizadooo", resp);
      }
    );
  }

}
