import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { IAccount } from '../iAccount';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-detail-account',
  templateUrl: './detail-account.page.html',
  styleUrls: ['./detail-account.page.scss'],
})
export class DetailAccountPage implements OnInit {

  @Input() account: IAccount;


  constructor(private modalCtrl:ModalController, navParams: NavParams) {

    console.log(navParams.get('account'));
  }


  ngOnInit() {
    
    console.log(this)
  }




  dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
