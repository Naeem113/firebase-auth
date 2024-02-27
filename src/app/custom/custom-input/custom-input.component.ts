import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonUtils } from '../../utils/common-utils';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.css'
})
export class CustomInputComponent {
  @Input() type: 'text' | 'password' | 'email' | 'date' | 'number'  = 'text';
  @Input() placeholder: string = '';
  @Input() name: string = '';
  @Input() lable: string = '';
  @Input() id: string = '';
  @Input() pattern: string ='';
  @Input() errorMessage: string ='';
  @Input() isInvalid: boolean = false;
  @Input() minlength:number | null = null;
  @Input() maxlength:number | null = null;
  @Input() isRequired:boolean = false;
  @Input() readOnly:boolean = false;
  @Input() isPhoneNumber:boolean = false;
  @Input() formSubmission: boolean = false;
  @Input() showPasswordToggle: boolean = false;
  @Input() showLable: boolean = false;
  @Output() inputFocus: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  @Output() inputChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() iconSrc: string = '';
  @Input() imgSrc: string = '';
  @Input() value: string | undefined = '';
  showPass: boolean = false;

  constructor(public commonUtils: CommonUtils) {
  }

  togglePasswordVisibility() {
    this.showPass = !this.showPass;
  }

  onInputFocus(){
    this.inputFocus.emit(true)
  }

}
