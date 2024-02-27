import { Component, NgModule, inject } from '@angular/core';
import { CustomInputComponent } from '../../custom/custom-input/custom-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomButtonComponent } from '../../custom/custom-button/custom-button.component';
import { FormMessageComponent } from '../../custom/form-message/form-message.component';
import { SocialButtonComponent } from '../../custom/social-button/social-button.component';
import { AuthService, IFormAlert } from '../../services/auth.service';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,CustomButtonComponent,FormMessageComponent,SocialButtonComponent,CustomInputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
//********************************************************************************** //
  // Variables
  //********************************************************************************** //
  form_submission: boolean = false
  loading: boolean = false
  gLoading: boolean = false
  fLoading: boolean = false
  aLoading: boolean = false
  showPass: boolean = false
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
  formMessage!: IFormAlert | null;
  form: any = {
    email: '',
    password: '',
  }

  //********************************************************************************** //
  // Inject services
  //********************************************************************************** //
  _auth = inject(AuthService)
  _router = inject(Router)


  constructor() {}

  ngOnInit() {
  }

  //********************************************************************************** //
  // On signin button click
  //********************************************************************************** //
  async signIn(value: any) {
    this.loading = true
    this.formMessage = null
    const {user, formAlert, isLoading} = await this._auth.userSignIn(value)
    this.redirectToSignIn(user,formAlert,isLoading)
  }

  //********************************************************************************** //
  // On GOOGLE signin button click
  //********************************************************************************** //
  async signInWithGoogle(){
    this.gLoading =true;
    this.formMessage = null
    const {user, formAlert, isLoading} = await this._auth.loginWithGmail()
    this.redirectToSignIn(user,formAlert,isLoading)
  }

  //********************************************************************************** //
  // On Focus any Input hide Form Error message
  //********************************************************************************** //
  onInputFocus(){
    if(this.formMessage?.message != '' || this.formMessage?.type !='')
    this.formMessage = null
  }

  availableSoon(){
    this.formMessage = {type:'warning',message:'This Feature is Not Available'}
    setTimeout(() => {
      this.formMessage = null
    }, 3000);
  }


  //********************************************************************************** //
  // Redirect to dashboard if user successfully signin
  //********************************************************************************** //
  redirectToSignIn(user:any | null, formAlert:IFormAlert | null, isLoading:boolean){
    this.loading = isLoading
    this.gLoading = isLoading
    this.formMessage = formAlert
    if(user?.uid)
    {
    this.form = {email:'',password:''}
    localStorage.setItem('user',JSON.stringify(user))
    this.formMessage = {type:'success',message:'Login Successfully redirecting to dashboard'}
    setTimeout(() => {
      this._router.navigate(['/dashboard'])
    }, 2000);

    }
  }
}
