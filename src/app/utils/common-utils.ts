import { Injectable, inject } from '@angular/core'
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CommonUtils {
  public static makeFirebaseMessageReadable(error: any,type:string=''): string {
    let message: string = error
    if (error && error?.message) {
      message = error.message.toString().replace('Firebase:', '')
      if (message.includes('user-not-found'))
        message =
          'No user exist with this email address! Try again with register email.'
      if (message.includes('wrong-password'))
        message = 'Invalid credentials! Try again with valid credentials.'
      if (message.includes('email-already-in-use'))
        message =
          'Account already exist against this email! Try with other email.'
      if (message.includes('invalid-action-code') && type == 'email')
        message =
          'Your verification link is expire! Or the code is provided in the link is invalid. Please verify the link and try again. Thanks'
      if (message.includes('invalid-action-code')&& type == 'pass')
        message =
          'Sorry! Your provided code in the link is invalid. Please verify the link and try again. Thanks'
    }
    return message
  }
}
