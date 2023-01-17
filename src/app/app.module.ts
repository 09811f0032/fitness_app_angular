import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TrainingHeaderComponent } from './training-header/training-header.component';
import { AppRoutingModule } from './app-routing.module';
import { BookingComponent } from './booking/booking.component';
import { ClubsComponent } from './clubs/clubs.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MembershipComponent } from './membership/membership.component';
import { InMemoryDataService } from './in-memory-data.service';
import { WorkoutComponent } from './workout/workout.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TrainingHeaderComponent,
    BookingComponent,
    ClubsComponent,
    UserProfileComponent,
    MembershipComponent,
    WorkoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
