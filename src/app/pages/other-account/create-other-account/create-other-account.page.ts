import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Validators,FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { IOtherAccount, IOtherAccountUser } from '../IOtherAccount';
import { IEntidadBancaria, ITipoCuenta, IMonedas } from './iCreateA';
import { OtherAccountService } from '../../../services/other-account.service';
import { UtilService } from '../../../services/util.service';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-create-other-account',
  templateUrl: './create-other-account.page.html',
  styleUrls: ['./create-other-account.page.scss'],
})
export class CreateOtherAccountPage implements OnInit {

  formCreateOtherAccount: FormGroup;
  iOtherAccountUser:IOtherAccountUser;
  iOtherAccounts: IOtherAccount;
  iEntidadBancarias:IEntidadBancaria[]=[];
  iTipoCuentas:ITipoCuenta[]=[];
  iModedas:IMonedas[]=[];

  subHeaderModal: string;
  messageModal: string;


  constructor(  private modalCtrl:ModalController,
                private formBuilder: FormBuilder,
                private otherAccountService: OtherAccountService,
                private utilService: UtilService,
                public alertController: AlertController

                ) { }

  ngOnInit() {
    this.initSelectAccount()
    this.initIOtherAccountUser()
    this.initIAccount();
    this.initFormCreateAccount()
  }

  initSelectAccount(){
    this.iEntidadBancarias.push(
      {
        id:'1',
        name:'BANCOLOMBIA'
      },
      {
        id:'2',
        name:'DAVIVIENDA'
      },
      {
        id:'3',
        name:'BANCO POPULAR'
      }
    )

    this.iTipoCuentas.push(
      {
        id:'1',
        name:'AHORROS'
      },
      {
        id:'2',
        name:'CORRIENTE'
      },
    ),

    this.iModedas.push(
      {
        id:'1',
        name:'PESOS'
      },
      {
        id:'2',
        name:'DOLAR'
      },
    )

  }

  dismissModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  initIOtherAccountUser(){
    this.iOtherAccountUser={
      id:0,
      idUser:JSON.parse(localStorage.getItem('user')).id,
      iOtherAccounts:[]
    }
  }

  initIAccount(){
    this.iOtherAccounts={
      alias:'',
      documentoTitular:'',
      entidadBancaria:'',
      id:'',
      modena:'',
      numeroCuenta:'',
      tipo:'',

    }
  }


  createAccount(){
  }

  initFormCreateAccount(){

    this.formCreateOtherAccount= this.formBuilder.group({
      alias:[this.iOtherAccounts.alias, Validators.required],
      documentoTitular:[this.iOtherAccounts.documentoTitular, Validators.compose([
        Validators.required, Validators.minLength(12), Validators.maxLength(12)])],
      entidadBancaria:[this.iOtherAccounts.entidadBancaria, Validators.required],
      numeroCuenta:[this.iOtherAccounts.numeroCuenta, Validators.compose([
        Validators.required, Validators.minLength(11), Validators.maxLength(11)])],

      tipo:[this.iOtherAccounts.tipo, Validators.required],
      moneda:[this.iOtherAccounts.modena, Validators.required],
    });
  }


  saveOtherAccount(): void {

    if(this.formCreateOtherAccount.valid){
      this.otherAccountService.getOtherAccountLocalStorage(this.iOtherAccounts.numeroCuenta)
      .subscribe(res=>{

        if(res== undefined){
          this.iOtherAccountUser.iOtherAccounts.push(this.iOtherAccounts)
          localStorage.setItem('otherAccounts', JSON.stringify(this.iOtherAccountUser));
          this.messageModal='La cuenta ha sido registrada con éxito'
          this.presentAlertOtherAccount()
          this.dismissModal()
        }else if(res==-1){
          this.otherAccountService.createOtherAccountLocalStorage(this.iOtherAccounts)
            .subscribe( res=>{
              this.messageModal='La cuenta ha sido registrada con éxito'
              this.presentAlertOtherAccount()
              this.dismissModal()
            },
            error=>{
              this.messageModal='Tenemos problemas para validar tu información'
              this.presentAlertOtherAccount()
              this.initIAccount()
            });
        }else{
          this.messageModal='Este número de cuenta ya esta asociada a otro alias'
          this.presentAlertOtherAccount()
          this.initIAccount()
        }
      })
    }
  }

  inputValidatorOnlyNumbers($event){

    this.utilService.inputValidatorOnlyNumbers($event)
  }

  async presentAlertOtherAccount() {
    const alert = await this.alertController.create({

      header: 'Información',
      message: this.messageModal,
      buttons: ['OK']
    });

    await alert.present();
  }





}
