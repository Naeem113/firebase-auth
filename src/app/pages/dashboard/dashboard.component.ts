import { Component, inject } from '@angular/core';
import { CustomButtonComponent } from '../../custom/custom-button/custom-button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CustomButtonComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  user:any;
  _router = inject(Router)

  constructor(){
    this.user = JSON.parse(localStorage.getItem('user')||'{}')
  }

  logout(){
    localStorage.clear();
    this._router.navigate(['/'])
  }
}
