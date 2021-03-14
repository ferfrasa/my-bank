import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IAccount, IAccountUser} from '../pages/account/iAccount'



@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private accountsUrl = 'api/accounts';

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<IAccountUser[]> {
    return this.http.get<IAccountUser[]>(this.accountsUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getAccount(id: string): Observable<IAccountUser> {

    const url = `${this.accountsUrl}/${id}`;
    return this.http.get<IAccountUser>(url)
      .pipe(
        tap(data => console.log('getAccount: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }



  private handleError(err: any): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }


}
