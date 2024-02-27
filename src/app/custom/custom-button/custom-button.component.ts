import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomSpinnerComponent } from '../custom-spinner/custom-spinner.component';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [CommonModule,CustomSpinnerComponent],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css'
})
export class CustomButtonComponent {
  @Input() buttonClass: string = '';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() icon: string = '';
  @Input() type: 'button' | 'menu' | 'reset' | 'submit' = 'button'
  @Input() label: string = '';
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
}
