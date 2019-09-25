import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { User, Project } from './user';
import { throwError, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserService {

    constructor(private http: HttpClient) { }

    getUser(): Observable<User> {
        return this.http.get(`https://next.json-generator.com/api/json/get/EJflQ5wpI`)
            .pipe(
                map((response) => response as User),
                catchError((err) => throwError(err))
            );
    }

    getProjects(): Observable<Array<Project>> {
        return this.http.get(`https://next.json-generator.com/api/json/get/N1aTlpEwv`)
            .pipe(
                map((response) => response as Array<Project>),
                catchError((err) => throwError(err))
            );
    }
}
