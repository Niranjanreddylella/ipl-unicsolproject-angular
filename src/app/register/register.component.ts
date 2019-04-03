import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../services/players.service'
import { register } from '../models/register';
import { Subscriber } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  reg:  register;
  constructor(private rg: PlayersService,private route:Router) {
    this.reg = new register();
  }

  ngOnInit() {
  }
  btnclick(frm: any) {
      this.rg.insertRegister(this.reg).subscribe((data) => {
       this.reg.userid=frm.value.userid
       this.reg.username=frm.value.username

       this.reg.password=frm.value.password

       this.reg.phone=frm.value.phone

       
       
        console.log(data);
      alert("register successss")
        this.route.navigate(['login']);
      });
    }

  }
