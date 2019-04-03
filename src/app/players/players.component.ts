import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../services/players.service'
import { players } from '../models/players';
import { Subscriber } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  plyr: any
  constructor(private pla: PlayersService,private route:Router) {
    this.plyr = new players();
  }
 Submitclick(frm: any) {  
    this.plyr.pimage = this.plyr.pimage.replace("data:image/png;base64,", " ");
    this.plyr.pimage = this.plyr.pimage.replace('data:image/jpeg;base64,', '');
    this.pla.insertPlayer(this.plyr).subscribe((data) => {
      console.log(data);
    this.route.navigate(['home'])
    });
  }
  ngOnInit() {

  }
  img(event) {
    if (event.target.files && event.target.files[0]) {
      var rdr = new FileReader();
      rdr.readAsDataURL(event.target.files[0])
      rdr.onload = (ev: any) => {
        this.plyr.pimage = ev.target.result;
      }
    }
  }



  
}
  