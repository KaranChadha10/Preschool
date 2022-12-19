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

    /**
    *
    * @param {Router} _router
    * @param {HttpClient} _http
    */
    constructor(private _router: Router, private _http: HttpClient) {
    }
    public get(url: string, options?: any) {
        return this._http.get(url, options);
    }
    public post(url: string, data: any, options?: any) {
        return this._http.post(url, data, options);
    }
    public put(url: string, data: any, options?: any) {
        return this._http.put(url, data, options);
    }
    public delete(url: string, options?: any) {
        return this._http.delete(url, options);
    }
}
