import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../services/players.service';
import { Router } from '@angular/router';
import { register } from '../models/register';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  reg: register;
  constructor(private lg: PlayersService, private router: Router) { this.reg = new register(); }
  ngOnInit() {
  }
  btnclick(userid, password) {
    let u = userid.value;
    let p = password.value;
    alert(u + '//' + p);
    this.lg.UserLogin(u, p).subscribe((data) => {
      console.log(data);
      if (data.length > 0) {
        alert('Login Succes');
        localStorage.setItem('uname', u);
        this.router.navigate(['home']);
      }
      else {
        alert('invalid user..');
      }
    });
  }
}