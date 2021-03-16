import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { OtherAccountService } from '../../services/other-account.service';
import { IOtherAccount, IOtherAccountUser } from '../other-account/IOtherAccount';
import { AlertController } from '@ionic/angular';
import { IMonedas } from '../other-account/create-other-account/iCreateA';
import { Validators,FormBuilder, FormGroup, FormControl} from '@angular/forms';



@Component({
  selector: 'app-account',
  templateUrl: 'account.page.html',
  styleUrls: ['account.page.scss']
})
export class AccountPage {
  title = 'app';
  elementType = 'url';
  value = 'Techiediaries';

  iOtherAccounts: IOtherAccount[]=[];
  otherAccount:IOtherAccount;
  mensajeModal:string;
  iModedas:IMonedas[]=[]
  formCreateQR: FormGroup;

  public parametrosQR:any={
    cuenta:'',
    moneda:'',
    valor:0
  }

  isCompleteQR=false;



  constructor(private barcodeScanner: BarcodeScanner,
              private otherAccountService:OtherAccountService,
              public alertController: AlertController,
              private formBuilder: FormBuilder,

              ) { }

  ngOnInit(){
    

     this.getOtherAccount();
     this.initMonedas()
     this.initFormQR();

  }

  readQR(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });

  }


  generateQR(){
    this.isCompleteQR=true

  }

  getOtherAccount(){
    this.otherAccountService.getAccountLocalStorage()
      .subscribe((res:IOtherAccountUser)=>{
        debugger

        if(res){
          this.iOtherAccounts= res.iOtherAccounts
        }else{
          this.mensajeModal='No tienes cuentas de terceros registradas.';
          this.presentAlertAccount()
        }

      })
  }

  initMonedas(){

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

  async presentAlertAccount() {
    const alert = await this.alertController.create({

      header: 'Información',
      message: this.mensajeModal,
      buttons: ['OK']
    });

    await alert.present();
  }

  initFormQR(){
    this.formCreateQR= this.formBuilder.group({
      cuenta:[this.parametrosQR.cuenta, Validators.required],
      moneda:[this.parametrosQR.moneda, Validators.required],
      valor:[this.parametrosQR.valor, Validators.required],
    });

  }

}
