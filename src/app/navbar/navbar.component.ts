import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { SerService } from '../ser.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  logincheck:any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
   

  constructor(private breakpointObserver: BreakpointObserver , private ser :SerService) {
    this.logincheck=this.log();
  }
  
  logout(){
    this.ser.destroyToken()
  }
  log(){
    if(localStorage.getItem('username')!=null){
      return true;
    }
    else{
      return false
    }
  }
  

}
