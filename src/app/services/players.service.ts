import { Injectable } from '@angular/core';
import { players } from '../models/players';
import { register } from '../models/register';
import{schedule}from '../models/players';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  updateDetails(arg0: any): any {
  }
  pname: any;
  matches: any;
  runs: any;
  best_score: any;
  team: any;
  pimage: any;
  url = "http://localhost:4600/players/"
  url1 = "http://localhost:4600/register/"
   url2="http://localhost:4600/schedule";
  url4="http://localhost:4600/players/team/";

  constructor(private htc: HttpClient) { }

  insertPlayer(pla: players): Observable<any> {
    console.log(JSON.stringify(pla));
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    }
    return this.htc.post(this.url, JSON.stringify(pla), httpOptions)

  }

  insertRegister(reg: register): Observable<any> {
    console.log(JSON.stringify(reg));
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    }
    return this.htc.post(this.url1, JSON.stringify(reg), httpOptions)
  }
  UserLogin(a: any, b: any): Observable<any>  {
    return this.htc.get(this.url1 + a+'/'+b, { responseType: 'json' })

  }

  getPlDetails(b: any): Observable<any> {
    return this.htc.get(this.url + b, { responseType: 'json' })
  }

  GetAllPlayers(): Observable<any> {
    return this.htc.get(this.url, { responseType: 'json' })
  }      


  GetSchedule(): Observable<any> {
    return this.htc.get(this.url2, { responseType: 'json' })
  }

  DeletePlyr(n: number): Observable<any> {
    return this.htc.delete(this.url + n, { responseType: 'json' })
  }

  UpdatePlyr(a:players):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    }
    console.log(a)
    return this.htc.put(this.url+a.pid,JSON.stringify(a), httpOptions)
  }
  getTeamDetails(a:any):Observable<any>{
    return this.htc.get(this.url4 + a, { responseType: 'json' })
  }
  saveschedule(sav:schedule) : Observable <any> {
    console.log(JSON.stringify(sav))
    const httpOptions = {
      headers : new HttpHeaders({'content-type': 'application/json' })
    }
    return this.htc.post(this.url2,JSON.stringify(sav),httpOptions)
  }
}




