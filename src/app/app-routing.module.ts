import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TrainingHeaderComponent } from './training-header/training-header.component';
import { BookingComponent } from './booking/booking.component';
import { ClubsComponent } from './clubs/clubs.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MembershipComponent } from './membership/membership.component';
import { WorkoutComponent } from './workout/workout.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: TrainingHeaderComponent,  children:[
    {path: ':id', component: WorkoutComponent}
  ]},
  { path: 'book', component: BookingComponent},
  { path: 'clubs', component: ClubsComponent},
  { path: 'profile', component: UserProfileComponent},
  { path: 'membership', component: MembershipComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
