import { Component } from '@angular/core';
import { error } from 'selenium-webdriver';
import { OtherAccountService } from '../../services/other-account.service';
import { IOtherAccountUser } from './IOtherAccount';
import { ModalController } from '@ionic/angular';
import { CreateOtherAccountPage } from './create-other-account/create-other-account.page';

@Component({
  selector: 'app-other-account',
  templateUrl: 'other-account.page.html',
  styleUrls: ['other-account.page.scss']
})
export class OtherAccountPage{

  hasOtherAccount:boolean=false;
  iOtherAccountUser:IOtherAccountUser;

  constructor(private otherAccountService:OtherAccountService, private modalCtrl:ModalController) {}

  ionViewDidEnter(){
    this.serchOtherAccount()

  }

  serchOtherAccount(){
    try {

      this.otherAccountService.getAccountLocalStorage()
      .subscribe(otherAccount=>{

        if(otherAccount==null){
          this.hasOtherAccount=true;

        }else{
          this.hasOtherAccount=false;
          this.iOtherAccountUser= otherAccount;
        }

        console.log(otherAccount)
      }, error=>{
        if(error.status=='404')
           console.log(error)
      })

    } catch (error) {

    }
  }

  async suscribeOtherAccount(){
    debugger
    const modal = await this.modalCtrl.create({
      component:CreateOtherAccountPage,
      componentProps: {
        /*account:account*/
      }
    });


     modal.onDidDismiss().then(()=>{
      debugger
      this.serchOtherAccount();

    })
    await modal.present();
  }


}




