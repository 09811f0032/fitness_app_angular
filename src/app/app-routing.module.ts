import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TrainingHeaderComponent } from './training-header/training-header.component';
import { BookingComponent } from './booking/booking.component';
import { ClubsComponent } from './clubs/clubs.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MembershipComponent } from './membership/membership.component';
import { WorkoutComponent } from './workout/workout.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full'},
  { path: 'auth', component: AuthComponent},
  { path: 'home', component: TrainingHeaderComponent,  children:[
    {path: ':id', component: WorkoutComponent, canActivateChild: [AuthGuard]}
  ]},
  { path: 'book', component: BookingComponent, canActivate: [AuthGuard]},
  { path: 'clubs', component: ClubsComponent, canActivate: [AuthGuard]},
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard]},
  { path: 'membership', component: MembershipComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
