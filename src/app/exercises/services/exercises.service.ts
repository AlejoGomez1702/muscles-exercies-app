import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, updateDoc, doc } from "@angular/fire/firestore";
import { Exercise } from '../interfaces/Exercise';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ExercisesService 
{

  constructor(
    private firestore: Firestore
  ) { }

  createExercise( exercise: Exercise )
  {
    const placeRef = collection( this.firestore, 'exercises' );
    
    return addDoc( placeRef, exercise );
  }

  getAllExercises(): Observable<Exercise[]>
  {
    const placeRef = collection( this.firestore, 'exercises' );

    return collectionData( placeRef, { idField: 'id' } ) as Observable<Exercise[]>;
  }

  updateExerciseFile( exerciseId: string, fileUrl: string )
  {
    const exerciseRef = doc( this.firestore, 'exercises', exerciseId );

    return updateDoc( exerciseRef, { fileUrl } );
  }

}
