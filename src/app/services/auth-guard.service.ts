import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, map, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export  class AuthGuardService  {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let email:string = localStorage.getItem("email")??"";
    let password:string=localStorage.getItem("password")??"";
    return this.authService.IsAuthenticated(email,password).pipe(take(1),map(x=>{
      if(x.status==true)
      {
        return true;
      }
      else
      {
        this.route.navigate(["/adminlogin"]);
        return false;
      }
    }));

  }

  constructor(private authService:AuthService,private route:Router) { }


}
