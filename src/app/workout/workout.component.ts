import { Component, OnInit } from '@angular/core';
import { TrainingServce } from '../training-header/training.service';
import { ActivatedRoute, Params } from '@angular/router';
import { WorkoutDetail } from '../models/workoutdetail.model';
import { of } from 'rxjs';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit{

  workout_id: any = 1;
  workout_details: WorkoutDetail[] = [];
  constructor(private trainingService: TrainingServce, private route: ActivatedRoute){

  }

  ngOnInit(): void {
     this.route.params.subscribe((params: Params )=> {
      console.log(params)
      this.workout_id = params['id'];
      
     }); 
     this.getWorkoutDetails();
  }

  getWorkoutDetails(){
    this.trainingService.getWorkoutDetailsByWorkoutId().subscribe({
      next: data => {this.workout_details = data.filter((v) => +v.workout_id === +this.workout_id)},
      error: error => {console.error('Reqest Failed')}
    });
  }



}
