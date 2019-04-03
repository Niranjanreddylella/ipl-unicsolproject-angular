import { Component, OnInit } from '@angular/core';
import { players } from '../models/players';
import { PlayersService } from '../services/players.service';
import { Router, ActivatedRoute } from '@angular/router';
import { tick } from '@angular/core/src/render3';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  pla: players
  constructor(private plyr: PlayersService,private arc:ActivatedRoute, private router: Router) {
this.pla=new players();
   }
   Submitclick(){
    
  this.plyr.UpdatePlyr(this.pla).subscribe((data)=>{
    console.log(data);
    this.router.navigate(['ShowAll'])
    
 })
}



ngOnInit() {

  let i = this.arc.snapshot.params.id;
  alert(i)
  this.plyr.getPlDetails(i).subscribe((data) => {
    this.pla.pid = data[0].pid;
    this.pla.pname = data[0].pname;
    this.pla.matches = data[0].matches;
    this.pla.runs = data[0].runs;
    this.pla.best_score = data[0].best_score;
    this.pla.team=data[0].team;
    this.pla.pimage=data[0].pimage
  //  this.mobi.mobileimage = data[0].email
    console.log(data);

    })

 }
  
}
