import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable,  throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
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



  /**Atrapar error relacionado al servicio */
  private handleError(error: any): Observable<never> {

    let errorMessage: string;

      errorMessage = `Un error ha ocurrido ${error.status}: ${error.body.error}`;

    console.error(error);
    return throwError(errorMessage);
  }


}
