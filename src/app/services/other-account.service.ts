import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IOtherAccount, IOtherAccountUser } from '../pages/other-account/IOtherAccount';


@Injectable({
  providedIn: 'root'
})
export class OtherAccountService {

  private otherAccountUrl = 'api/iOtherAccounts';

  constructor(private http: HttpClient) { }



  getOtherAccount(id: string): Observable<IOtherAccountUser> {

    const url = `${this.otherAccountUrl}/${id}`;
    return this.http.get<IOtherAccountUser>(url)
      .pipe(
        tap(data => console.log('getOtherAccount: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getOtherAccountLocalStorage(id: string): Observable<any> {
    debugger

    let account/*:IOtherAccount*/;
    let otherAccounts:IOtherAccount[]


    if (JSON.parse(localStorage.getItem('otherAccounts'))){
      otherAccounts=  JSON.parse(localStorage.getItem('otherAccounts')).iOtherAccounts||[];
      account= otherAccounts.find(res=>res.numeroCuenta==id)
      if(!account){
        account=-1;
      }
    }
    return of(account);
  }

  getAccounts(): Observable<IOtherAccountUser[]> {
    return this.http.get<IOtherAccountUser[]>(this.otherAccountUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getAccountLocalStorage(): Observable<IOtherAccountUser> {
    let otherAccounts:IOtherAccountUser= JSON.parse(localStorage.getItem('otherAccounts'))
    return of(otherAccounts);
  }

  createOtherAccount(otherAccount: IOtherAccountUser): Observable<IOtherAccountUser> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); //para que retorne JSON
    otherAccount.id = null;
    return this.http.post<IOtherAccountUser>(this.otherAccountUrl, otherAccount, { headers })
      .pipe(
        tap(data => console.log('createOtherAccount: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createOtherAccountLocalStorage(otherAccount: IOtherAccount): Observable<IOtherAccount> {
    let otherAccountsList:IOtherAccountUser;

    console.log(JSON.parse(localStorage.getItem('otherAccounts')))

    otherAccountsList=JSON.parse(localStorage.getItem('otherAccounts')) || {};
    otherAccountsList.iOtherAccounts.push(otherAccount);
    localStorage.setItem('otherAccounts', JSON.stringify(otherAccountsList))
    return of(otherAccount);
  }

  private handleError(err: any): Observable<never> {
    let errorMessage: any;

    errorMessage = {status:err.status, message:err.body.error};
    console.error(err);
    return throwError(errorMessage);
  }

}
