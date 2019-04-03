import { Component, OnInit } from '@angular/core';
import {players } from '../models/players'
import { PlayersService } from '../services/players.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


pl:players;
  constructor(private plyr:PlayersService,private router:Router) {
    this.pl=new players()
  }
 
  ngOnInit() {
this.plyr.GetAllPlayers().subscribe((data)=>{
  console.log(data)
this.pl=data;

})
   
  }
  detailsClick(a:any){
    alert("clicked")
    this.router.navigate(['PlayersDetails/'+a])

  }

}
