import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../_models/student.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  //github merg check
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  /**
   *
   * @param {Router} _router
   * @param {HttpClient} _http
   */
  constructor(private _router: Router, private _http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user') || '{}'));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(email: string, password: string){
    return this._http.post<any>(`${environment.url}/users/authenticate`,{email,password})
    .pipe(map(user => {
      localStorage.setItem('user', JSON.stringify(user));
      this.userSubject.next(user);
      return user;
    }))
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.userSubject.next(null!);
    this._router.navigate(['/account/login']);
  }
}
