import { Injectable, inject } from '@angular/core'
import { CookieService } from 'ngx-cookie-service'


export interface User {
  email:string;
  password?:string
}


@Injectable({
  providedIn: 'root',
})
export class SessionService {

  //********************************************************************************** //
  // Variables
  //********************************************************************************** //
  private readonly userKey = 'user'
  private user: User | null = null


  //********************************************************************************** //
  // Inject services
  //********************************************************************************** //
  cookieService = inject(CookieService)

  constructor() {}

  //********************************************************************************** //
  // set a user in a cookies/session
  //********************************************************************************** //
  setUser(user: User): User | null {
    if (typeof Storage !== 'undefined') {
      this.cookieService.set(this.userKey, JSON.stringify(user), 1, '/')
      this.user = user
    }
    return this.user
  }

  //********************************************************************************** //
  // get a user in a cookies/session
  //********************************************************************************** //
  getUser(): User | null {
    const userJson = this.cookieService.get(this.userKey)
    if (userJson != 'undefined' && this.user == null && userJson != '') {
      this.user = JSON.parse(userJson)
    }
    return this.user
  }

  //********************************************************************************** //
  // check IF user available in a cookies/session
  //********************************************************************************** //
  hasUser(): boolean {
    return this.user ? true : false;
  }

  //********************************************************************************** //
  // remove a user from cookies/session
  //********************************************************************************** //
  clearUser(): void {
    this.cookieService.delete(this.userKey,'/');
  }

    //********************************************************************************** //
  // remove a user from cookies/session
  //********************************************************************************** //
  clearAllDataFromSession(): void {
    this.cookieService.deleteAll('/');
  }

}
