import { Component, OnInit } from '@angular/core';
import { Workout } from '../models/workout.model';
import { TrainingServce } from './training.service';

@Component({
  selector: 'app-training-header',
  templateUrl: './training-header.component.html',
  styleUrls: ['./training-header.component.css']
})
export class TrainingHeaderComponent implements OnInit{

  workouts: Workout[] = [];

  constructor(private trainingService: TrainingServce){

  }

  ngOnInit(): void {
      this.getWorkouts();
  }

  getWorkouts(): void {
    this.trainingService.getWorkouts().subscribe(workouts => this.workouts = workouts);
  }
}
