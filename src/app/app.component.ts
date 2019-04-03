import { Component, OnInit, DoCheck } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
export class AppComponent implements OnInit, DoCheck{
     k: Observable<any>;
    lg: Observable<any>
    constructor(private r:Router) {
    }
    CheckLocalStore(): Observable<any> {
        return of(localStorage.getItem("uname"));
    }
    // adm(): Observable<any> {
    //     return of(localStorage.getItem("ad"));
    // }
    ngOnInit() {
    
    }


    onSelect(a:any){
        let b=a.value;
        alert("clicked")
        this.r.navigate(['team'+'/'+b])
    }


    lnkLogoutClick()
    {
        localStorage.removeItem("uname");
        localStorage.removeItem("ad");       
        this.r.navigate([''])
    }
    ngDoCheck() {
        this.CheckLocalStore().subscribe((data) => { this.lg = data })
        // this.adm().subscribe((data) => { this.k = data })
    }

}