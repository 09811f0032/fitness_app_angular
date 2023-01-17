import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb(){
    const membership = [
      {
        membership_id: 1,  
        membership_name: 'Gym Training', 
        membership_type: 'One Club'
      }
    ];
    const users = [
      { user_id: 1, 
        firstname: 'Shanmukha', 
        lastname: 'Kommoju', 
        phone: '1234567890', 
        email: 'shanmukha@something.com', 
        username: 'srujan.k', 
        password: '12345', 
        membership_id: 1,
        address: 'xyz, Vantaa 01600',
        club_id: 2
      }];
    const workouts = [
      {
        workout_id: 1,
        workout_name: 'Full body workout',
        workout_type: 'Beginer' 
      },
      {
        workout_id: 2,
        workout_name: 'Full body workout',
        workout_type: 'Experienced' 
      }
    ];
    const workoutdetail = [
      {
        workout_detail_id: 1,
        reps: '6',
        sets: '2',
        type: 'rep',
        description: 'Squat to Stand',
        workout_id: 1
      },
      {
        workout_detail_id: 2,
        reps: '12',
        sets: '2',
        type: 'rep',
        description: 'Worlds greatest stretch',
        workout_id: 1
      },
      {
        workout_detail_id: 3,
        reps: '6',
        sets: '2',
        type: 'rep',
        description: 'Crossover Glute Stretch',
        workout_id: 1
      },
      {
        workout_detail_id: 4,
        reps: '6',
        sets: '2',
        type: 'rep',
        description: 'The Wall Angel',
        workout_id: 1
      },
      {
        workout_detail_id: 5,
        reps: '12-15',
        sets: '3',
        type: 'sets',
        description: 'Leg Press',
        workout_id: 1
      },
      {
        workout_detail_id: 6,
        reps: '12-15',
        sets: '3',
        type: 'sets',
        description: 'Chest Press machine',
        workout_id: 1
      },
      {
        workout_detail_id: 7,
        reps: '12-15',
        sets: '3',
        type: 'sets',
        description: 'Seated row cable wide grip',
        workout_id: 1
      },
      {
        workout_detail_id: 8,
        reps: '12-15',
        sets: '3',
        type: 'sets',
        description: 'Leg Extension',
        workout_id: 1
      },
      {
        workout_detail_id: 9,
        reps: '0 minutes',
        sets: '3',
        type: 'sets',
        description: 'Mountain climber',
        workout_id: 1
      },
      {
        workout_detail_id: 10,
        reps: '8',
        sets: '2',
        type: 'rep',
        description: 'Squat to Stand',
        workout_id: 2
      },
      {
        workout_detail_id: 11,
        reps: '8',
        sets: '2',
        type: 'rep',
        description: 'Worlds greatest stretch',
        workout_id: 2
      },
      {
        workout_detail_id: 12,
        reps: '10',
        sets: '2',
        type: 'reps',
        description: 'Crossover Glute Stretch',
        workout_id: 2
      },
      {
        workout_detail_id: 13,
        reps: '10',
        sets: '2',
        type: 'rep',
        description: 'Air Squat',
        workout_id: 2
      },
      {
        workout_detail_id: 14,
        reps: '2',
        sets: '',
        type: 'reps',
        description: 'Landmine Single Leg Deadlift',
        workout_id: 2
      },
      {
        workout_detail_id: 15,
        reps: '5',
        sets: '3',
        type: 'reps',
        description: 'Chest Press machine',
        workout_id: 2
      },
      {
        workout_detail_id: 16,
        reps: '4-6',
        sets: '3',
        type: 'sets',
        description: 'Squat',
        workout_id: 2
      },
      {
        workout_detail_id: 17,
        reps: '8-12',
        sets: '3',
        type: 'sets',
        description: 'Hip Thrust barbell',
        workout_id: 2
      },
      {
        workout_detail_id: 18,
        reps: '8-12',
        sets: '3',
        type: 'sets',
        description: 'Miniband sidewalk',
        workout_id: 2
      },
      {
        workout_detail_id: 19,
        reps: '8-12',
        sets: '3',
        type: 'sets',
        description: 'Goblet squat',
        workout_id: 2
      },
      {
        workout_detail_id: 20,
        reps: '8-12',
        sets: '3',
        type: 'sets',
        description: 'Romanian Deadlift',
        workout_id: 2
      }
      
    ];
    const workoutschedule = [
      {
        workout_schedule_id: 1,
        scheduled_week: 'week 1',
        scheduled_day: 'day 1',
        workout_detail_id: 1
      },
      {
        workout_schedule_id: 2,
        scheduled_week: 'week 1',
        scheduled_day: 'day 1',
        workout_detail_id: 2
      },
      {
        workout_schedule_id: 3,
        scheduled_week: 'week 1',
        scheduled_day: 'day 1',
        workout_detail_id: 3
      },
      {
        workout_schedule_id: 4,
        scheduled_week: 'week 1',
        scheduled_day: 'day 1',
        workout_detail_id: 4
      },
      {
        workout_schedule_id: 5,
        scheduled_week: 'week 1',
        scheduled_day: 'day 1',
        workout_detail_id: 5
      },
      {
        workout_schedule_id: 6,
        scheduled_week: 'week 1',
        scheduled_day: 'day 1',
        workout_detail_id: 6
      },
      {
        workout_schedule_id: 7,
        scheduled_week: 'week 1',
        scheduled_day: 'day 1',
        workout_detail_id: 7
      },
      {
        workout_schedule_id: 8,
        scheduled_week: 'week 1',
        scheduled_day: 'day 1',
        workout_detail_id: 8
      },
      {
        workout_schedule_id: 9,
        scheduled_week: 'week 1',
        scheduled_day: 'day 1',
        workout_detail_id: 9
      },
      {
        workout_schedule_id: 10,
        scheduled_week: 'week 1',
        scheduled_day: 'day 2',
        workout_detail_id: 1
      },
      {
        workout_schedule_id: 11,
        scheduled_week: 'week 1',
        scheduled_day: 'day 2',
        workout_detail_id: 2
      },
      {
        workout_schedule_id: 12,
        scheduled_week: 'week 1',
        scheduled_day: 'day 2',
        workout_detail_id: 3
      },
      {
        workout_schedule_id: 13,
        scheduled_week: 'week 1',
        scheduled_day: 'day 2',
        workout_detail_id: 5
      },
      {
        workout_schedule_id: 14,
        scheduled_week: 'week 1',
        scheduled_day: 'day 2',
        workout_detail_id: 6
      },
      {
        workout_schedule_id: 15,
        scheduled_week: 'week 1',
        scheduled_day: 'day 2',
        workout_detail_id: 7
      },
      {
        workout_schedule_id: 16,
        scheduled_week: 'week 1',
        scheduled_day: 'day 1',
        workout_detail_id: 10
      },
      {
        workout_schedule_id: 17,
        scheduled_week: 'week 1',
        scheduled_day: 'day 1',
        workout_detail_id: 11
      },
      {
        workout_schedule_id: 18,
        scheduled_week: 'week 1',
        scheduled_day: 'day 1',
        workout_detail_id: 12
      },
      {
        workout_schedule_id: 19,
        scheduled_week: 'week 1',
        scheduled_day: 'day 1',
        workout_detail_id: 13
      },
      {
        workout_schedule_id: 20,
        scheduled_week: 'week 1',
        scheduled_day: 'day 1',
        workout_detail_id: 14
      },
      {
        workout_schedule_id: 21,
        scheduled_week: 'week 1',
        scheduled_day: 'day 1',
        workout_detail_id: 15
      },
      {
        workout_schedule_id: 22,
        scheduled_week: 'week 1',
        scheduled_day: 'day 2',
        workout_detail_id: 16
      },
      {
        workout_schedule_id: 23,
        scheduled_week: 'week 1',
        scheduled_day: 'day 2',
        workout_detail_id: 17
      },
      {
        workout_schedule_id: 24,
        scheduled_week: 'week 1',
        scheduled_day: 'day 2',
        workout_detail_id: 18
      },
      {
        workout_schedule_id: 25,
        scheduled_week: 'week 1',
        scheduled_day: 'day 2',
        workout_detail_id: 19
      },
      {
        workout_schedule_id: 26,
        scheduled_week: 'week 1',
        scheduled_day: 'day 2',
        workout_detail_id: 20
      }
      
    ];
    const clubs = [
      {
        club_id: 1,
        club_name: 'Finlandia',
        country: 'Finland',
        city: 'Espoo',
        region: 'Sello'
      },
      {
        club_id: 2,
        club_name: 'Finlandia',
        country: 'Finland',
        city: 'Vantaa',
        region: 'Myyrmaki'
      },
      {
        club_id: 3,
        club_name: 'Finlandia',
        country: 'Finland',
        city: 'Tapola',
        region: 'Iso Omenna'
      }
    ];
    const training = [
      {
        training_id: 1,
        training_name: 'Group Class',
        training_type: 'GROUP'
      },
      {
        training_id: 2,
        training_name: 'Personal Trainee',
        training_type: 'PERSONAL_TRAINER'
      }
    ];
    const groupclasstrainings = [
      {
        training_list_id: 1,
        name: 'Balance',
        description: '',
        training: training[0]
      },
      {
        training_list_id: 2,
        name: 'Cardio',
        description: '',
        training: training[0]
      },
      {
        training_list_id: 3,
        name: 'Cycling',
        description: '',
        training: training[0]
      },
      {
        training_list_id: 4,
        name: 'Dance',
        description: '',
        training: training[0]
      },
      {
        training_list_id: 5,
        name: 'Martial Arts',
        description: '',
        training: training[0]
      },
      {
        training_list_id: 6,
        name: 'Yoga',
        description: '',
        training: training[0]
      }
    ];
    const instructor = [
      {
        instructor_id: 1,
        name: 'Mikko K',
        desc: 'Myyrmaki',
        club: clubs[1]
      }
    ];
    const personalTrainerTrainings = [
      {
        pt_id: 1,
        trainer: instructor[0]
      }
    ];
    return {membership,users,workouts,workoutdetail,workoutschedule,clubs,training,groupclasstrainings,personalTrainerTrainings};
    
  }
  constructor() { }
} 