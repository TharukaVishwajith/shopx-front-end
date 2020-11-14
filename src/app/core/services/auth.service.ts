import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { Router } from '@angular/router';
import {ApiService} from './api.service';
import {User} from '../models/User';
import {JwtService} from './jwt.service';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private authClient = new OktaAuth({
  //   issuer: 'https://dev-133320.okta.com/oauth2/default',
  //   clientId: '0oa2atheooXCVENi4357'
  // });

  public isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private router: Router, private apiService: ApiService,  private jwtService: JwtService) {
  }

  async checkAuthenticated() {
    // const authenticated = await this.authClient.session.exists();
    // this.isAuthenticated.next(authenticated);
    // return authenticated;
    return true;
  }

  attemptAuth(username: string, password: string): Observable<User> {

    return this.apiService.post('/auth/signin' , {username: username, password: password})
      .pipe(map(
        data => {
          this.setAuth(data);
          return data;
        }
      ));
  }

  async logout(redirect: string) {
    // try {
    //   await this.authClient.signOut();
    //   this.isAuthenticated.next(false);
    //   this.router.navigate([redirect]);
    // } catch (err) {
    //   console.error(err);
    // }
  }

  setAuth(user: User): any {
    // Save JWT sent from server in localstorage
    this.jwtService.saveToken(user.accessToken);
    window.localStorage['username'] = user.username;
  }

}
