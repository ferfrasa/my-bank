import { Component, OnInit } from '@angular/core';
import { IUser } from './iLogin';
import { Validators,FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  iUser:IUser;
  formLogin: FormGroup
  errorLogin:string;
  isProcessLogin:boolean;

  constructor( private formBuilder: FormBuilder,
    private auth:AuthService,
    private router:Router,
    private userService:UserService) {
      
    this.iUser={
      pass:'',
      user:'',
    }
    this.isProcessLogin=false
  }



  ngOnInit() {
    this.initFormLogin()
  }

  initFormLogin(){
    this.formLogin= this.formBuilder.group({
      email: new FormControl(this.iUser.user, Validators.compose(
        [Validators.required,
         Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
      password:[this.iUser.pass, Validators.required]
    });

  }

  doLogin(){
    try {

      this.errorLogin=''
      this.isProcessLogin= true;

      this.auth.loginUser(this.iUser).then(res=>{

        //obtener el token
        res.user.getIdToken().then(token=>{
          localStorage.setItem('token', token)
           //buscar el usuario con el id

          this.userService.getUser(res['user']['uid']).subscribe(user=>{
            localStorage.setItem('user',JSON.stringify(user))
            localStorage.setItem('lastSignInTime', res['user']['metadata']['lastSignInTime'])
            this.redirectHome();
          })
        })

      }).catch(error=>{
        this.errorLogin=error;
      })
    } catch (error) {
      this.errorLogin=error;
      console.log(error)
    }

  }

  private redirectHome(): void {
   /* if (isVerified) {
      this.router.navigate(['admin']);
    } else {*/
      this.router.navigate(['app']);
   /* }*/
  }

}
