import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-message.component.html',
  styleUrl: './form-message.component.css'
})
export class FormMessageComponent {
  @Input() type: 'success' | 'error' | 'warning' | 'info'| string = 'success'
  @Input() message:string = '';
  @Input() autoClose:boolean =true;
  @Output() onClose = new EventEmitter();
  showMessage:boolean = true;

  constructor(){

  }

  ngAfterViewInit(){
    if(this.message && this.autoClose){
      setTimeout(() => {
        // this.message = ''
        this.onClose.emit()
      }, 3000);
    }
  }
}
