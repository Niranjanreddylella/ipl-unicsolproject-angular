import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../services/players.service';
import{schedule} from '../models/players';
import { Router } from '@angular/router';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
sc:schedule;
  constructor(private sch:PlayersService,private router:Router ) {
    this.sc=new schedule();
   }

  ngOnInit() {
    this.sch.GetSchedule().subscribe((data) => {
      console.log(data)
      this.sc = data;

    })
  }


}
