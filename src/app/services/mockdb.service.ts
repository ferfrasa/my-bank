import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { IAccountUser } from '../pages/account/iAccount';
import { User } from '../pages/login/iLogin';
import { IOtherAccount, IOtherAccountUser } from '../pages/other-account/IOtherAccount';



@Injectable({
  providedIn: 'root'
})
export class MockdbService implements InMemoryDbService {

  constructor() { }


  createDb(reqInfo?: RequestInfo): { users: User[], accounts:IAccountUser[], iOtherAccounts:IOtherAccountUser[]} {


    const users: User[] = [
      {
        id: '',
        dateAcces: new Date(),
        email:'user@user.co',
        name:'Usuario Demo'
      },
      {
        id:'OigHYGBlAnQP7tGtk9Wv8ypvRxA3',
        dateAcces: new Date(),
        email:'user1@user.co',
        name:'Usuario 1'
      },
      {
        id:'Fp1dTBOISRQ4AUHemFA4hZDc3c73',
        dateAcces: new Date(),
        email:'user3@user.co',
        name:'Usuario 3'
      },
      {
        id:'',
        dateAcces: new Date(),
        email:'user2@user.co',
        name:'Usuario 2'
      },
    ];
    const accounts: IAccountUser[] = [
      {
        id:'OigHYGBlAnQP7tGtk9Wv8ypvRxA3',
        accounts:[
          {
            balance:50000,
            id:'1',
            name:'Cuenta de ahorros 2',
            type:'AHORROS',
            movements:[
              {
                date: new Date('2021-01-25'),
                id:'1',
                type:'DEBITO',
                value:15
              },
              {
                date: new Date('2021-01-27'),
                id:'2',
                type:'CREDITO',
                value:15
              },
              {
                date: new Date('2021-01-24'),
                id:'3',
                type:'CREDITO',
                value:15
              }
            ]
          },
          {
            balance:5000,
            id:'2',
            name:'Cuenta de Corriente',
            type:'CORRIENTE',
            movements:[
              {
                date: new Date('2021-01-25'),
                id:'1',
                type:'CREDITO',
                value:150
              },
            ]
          }
        ]
      },
      {
        id:'Fp1dTBOISRQ4AUHemFA4hZDc3c73',
        accounts:[
          {
            balance:50000,
            id:'1',
            name:'Cuenta de ahorros2',
            type:'AHORROS',
            movements:[
              {
                date: new Date('2021-01-25'),
                id:'1',
                type:'DEBITO',
                value:15
              },
              {
                date: new Date('2021-01-27'),
                id:'2',
                type:'CREDITO',
                value:15
              },
              {
                date: new Date('2021-01-24'),
                id:'3',
                type:'CREDITO',
                value:15
              }
            ]
          },
          {
            balance:5000,
            id:'2',
            name:'Cuenta de Corriente',
            type:'CORRIENTE',
            movements:[
              {
                date: new Date('2021-01-25'),
                id:'1',
                type:'CREDITO',
                value:150
              },
            ]
          }
        ]
      }

    ];
    const iOtherAccounts:IOtherAccountUser[]=[];
    return { users, accounts,iOtherAccounts };
  }
}



