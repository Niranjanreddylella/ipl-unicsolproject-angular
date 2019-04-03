import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlayersService } from '../services/players.service';
import { players } from '../models/players';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {
plyr:players;
  constructor(private router:Router,private arc:ActivatedRoute,private sr:PlayersService) {
    this.plyr=new players();
   }

  ngOnInit() {
    let a=this.arc.snapshot.params.id;
    this.sr.getPlDetails(a).subscribe((data)=>{
      console.log(data)
      this.plyr.pname=data[0].pname;
      this.plyr.matches=data[0].matches;
      this.plyr.runs=data[0].runs;
      this.plyr.best_score=data[0].best_score;
      this.plyr.team=data[0].team;
      this.plyr.pimage=data[0].pimage;
    })
  }
}
