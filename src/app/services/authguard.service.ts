import { Injectable } from '@angular/core';

import { Router, CanActivate } from '@angular/router';
import  * as firebase from 'firebase';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(): Observable <boolean> | Promise<boolean> | boolean {
    return new Promise(
      (resolve,reject) =>{
        firebase.auth().onAuthStateChanged(
          (user) =>{
            if(user){
            resolve(true);
            } else {
              this.router.navigate(['/auth','signin']);
              resolve (false);
            }
          }
        )
      }
    )
  }
}
