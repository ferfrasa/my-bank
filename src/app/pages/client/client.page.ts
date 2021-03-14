import { Component, OnInit } from '@angular/core';
import { User } from '../login/iLogin';
import { AccountService } from '../../services/account.service';
import { IAccountUser, IAccount } from '../account/iAccount';
import { ModalController } from '@ionic/angular';
import { DetailAccountPage } from '../account/detail-account/detail-account.page';



@Component({
  selector: 'app-client',
  templateUrl: 'client.page.html',
  styleUrls: ['client.page.scss']
})
export class ClientPage implements OnInit {

  userActive:User;

  cardItems:any[]=[]
  accounstUser:IAccountUser={
    accounts:[]=[],
    id:''
  };


  constructor( private accountService: AccountService, private modalCtrl:ModalController){

  }
  ngOnInit(): void {

    this.initUser()
    this.getInfoAccounts();
  }

  initUser(){

    this.userActive= JSON.parse(localStorage.getItem('user'))
  }

  getInfoAccounts(){
    try {
      this.accountService.getAccount(this.userActive.id)
      .subscribe((account:IAccountUser)=>{
        this.accounstUser= account;
        console.log(account)

      },error=>{
        console.error(error);

      })

    } catch (error) {
      console.log(error)

    }
  }

  async viewDetailAccount(account:IAccount){
    debugger
    const modal = await this.modalCtrl.create({
      component:DetailAccountPage,
      componentProps: {
        account:account
      }
    });

    await modal.present();
  }



}







