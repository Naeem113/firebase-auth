import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomSpinnerComponent } from '../custom-spinner/custom-spinner.component';

@Component({
  selector: 'app-social-button',
  standalone: true,
  imports: [CommonModule,CustomSpinnerComponent],
  templateUrl: './social-button.component.html',
  styleUrl: './social-button.component.css'
})
export class SocialButtonComponent {
  @Output() onClick = new EventEmitter();
  @Input() loading :boolean = false;
  @Input() logo :string = '';
  @Input() text :string = '';
  @Input() classes:string='bg-transparent border-zinc-400 text-zinc-400';


}
