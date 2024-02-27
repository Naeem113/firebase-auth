import { Injectable, inject } from '@angular/core'
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'
import { SessionService, User } from './session.service'
import { Router } from '@angular/router'
import { firebaseAuth } from '../config/firebase'
import { CommonUtils } from '../utils/common-utils'
export interface IFormAlert {
  message:string,
  type:'success' | 'error' | 'warning' | 'info' | string
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //********************************************************************************** //
  // Veriables
  //********************************************************************************** //
  loadingState: boolean = false
  formAlert: IFormAlert | null = null
  user: any | null = null
  token: string | null = null


  //********************************************************************************** //
  // Inject services
  //********************************************************************************** //
  _session = inject(SessionService)
  _router = inject(Router)
  CommonUtils = inject(CommonUtils)

  constructor() {}

  //********************************************************************************** //
  // User signin logic
  //********************************************************************************** //

  async userSignIn(value: any) {
    this.loadingState = true
    const { email, password } = value

    try {
      const { user } = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password as string,
      )
      this.loadingState = false

      // this.user = this._session.decodeToken(result.jwt_token).user
      return {
        user: user,
        formAlert: this.formAlert,
        isLoading: this.loadingState,
      }
    } catch (error: any) {
      this.loadingState = false
      this.formAlert = {
        type: 'error',
        message: CommonUtils.makeFirebaseMessageReadable(error),
      }
      console.log(error)
      return {
        user: null,
        formAlert: this.formAlert,
        isLoading: this.loadingState,
      }
    }
  }


  //********************************************************************************** //
  // User google signin logic
  //********************************************************************************** //

  async loginWithGmail() {
    this.loadingState = true
    const provider = new GoogleAuthProvider()
    try {
      const { user } = await signInWithPopup(firebaseAuth, provider)

      this.loadingState = false
      return {
        user: user,
        formAlert: this.formAlert,
        isLoading: this.loadingState,
      }
    } catch (error) {
      this.loadingState = false
      this.formAlert = {
        type: 'error',
        message: CommonUtils.makeFirebaseMessageReadable(error),
      }
      return {
        user: null,
        formAlert: this.formAlert,
        isLoading: this.loadingState,
      }
    }
  }




  //********************************************************************************** //
  // User logout logic
  //********************************************************************************** //

  logoutUser() {
    this._session.clearAllDataFromSession()
    this._router.navigate(['/'])
  }
}
