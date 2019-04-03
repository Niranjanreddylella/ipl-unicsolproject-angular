import { Component, OnInit } from '@angular/core';
import { players } from '../models/players';
import { Router, ActivatedRoute } from '@angular/router';
import { PlayersService } from '../services/players.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  plyr:players;
  constructor(private router:Router,private arc:ActivatedRoute,private sr:PlayersService) {
    this.plyr=new players();
   }

  ngOnInit() {
    let a=this.arc.snapshot.params.id;
    alert(a)
    this.sr.getTeamDetails(a).subscribe((data)=>{
      console.log(data)
      alert(JSON.stringify(data))
     this.plyr=data;
     this.router.navigate(['team'])      
    })
  }
}
