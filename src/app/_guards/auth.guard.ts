import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountServiceService } from '../account-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private accountServiceService : AccountServiceService){

  }
  canActivate():  Observable<boolean> {
    return this.accountServiceService.currentUser$.pipe(map((user : any) => {
      if(user){
          return true
        }
    console.log('no user found')
    alert('no user found')
    return false;
  }));
  }
}
