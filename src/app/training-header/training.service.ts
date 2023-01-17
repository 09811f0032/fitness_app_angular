import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from "rxjs";
import { Workout } from "../models/workout.model";
import { WorkoutDetail } from "../models/workoutdetail.model";

@Injectable({providedIn: 'root'})
export class TrainingServce {

    private workoutUrl = 'api/workouts/';
    private workoutdetailUrl = 'api/workoutdetail/'

    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(private http: HttpClient){

    }

    getWorkouts(): Observable<Workout[]> {
        return this.http.get<Workout[]>(this.workoutUrl)
            .pipe(tap(_ => console.log('Fetched workouts')), catchError(this.handleError<Workout[]>('getWorkouts', []))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
    
          // TODO: better job of transforming error for user consumption
          console.log(`${operation} failed: ${error.message}`);
    
          // Let the app keep running by returning an empty result.
          return of(result as T)
        };
      }

    getWorkoutDetailsByWorkoutId(): Observable<WorkoutDetail[]> {
        return this.http.get<WorkoutDetail[]>(this.workoutdetailUrl)
                .pipe(tap(_ => console.log('Fetched workoutdetail by workoutid')), catchError(this.handleError<WorkoutDetail[]>('getWorkoutDetailsByWorkoutId',[]))
                );
    }
}