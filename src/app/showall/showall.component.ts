import { Component, OnInit } from '@angular/core';
import { players } from '../models/players';
import { PlayersService } from '../services/players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styleUrls: ['./showall.component.css']
})
export class ShowallComponent implements OnInit {

  pla: any[];
  constructor(private pl: PlayersService,private router:Router) {
    //this.pla = new players()
  }
  btnDel(n: number) {
    this.pl.DeletePlyr(n).subscribe((data) => {
      console.log(data)
      this.router.navigate(['ShowAll'])
    })
    location.reload()
   
  }
  ngOnInit() {
    this.pl.GetAllPlayers().subscribe((data) => {
      console.log(data)
      this.pla = data;

    })
  

    }
    btnEditClick(a:any){
  
      this.router.navigate(['Edit/'+a])    
    }
  }
 



