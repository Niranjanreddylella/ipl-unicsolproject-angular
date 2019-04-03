import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PlayersComponent } from './players/players.component'
import { players } from './models/players';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { ShowallComponent } from './showall/showall.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AddscheduleComponent } from './addschedule/addschedule.component';
import { EditComponent } from './edit/edit.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TeamComponent } from './team/team.component';
import { Home1Component } from './home1/home1.component';
 import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'PlayersDetails/:id', component: PlayerDetailsComponent },
  { path: 'ShowAll', component: ShowallComponent },
  { path: 'Schedule', component: ScheduleComponent },
  { path: 'addschedule', component: AddscheduleComponent },
  { path: 'Edit/:id', component: EditComponent },
  { path: 'team/:id', component: TeamComponent },
 { path:'about',component:AboutComponent},




]


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PlayersComponent,
    LoginComponent,
    HomeComponent,
    PlayerDetailsComponent,
    ShowallComponent,
    ScheduleComponent,
    AddscheduleComponent,
    EditComponent,
    TeamComponent,
    Home1Component,
     AboutComponent,
   
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(routes), CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
