import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.css'],
})
export class ButtonPrimaryComponent {
  @Input() text = 'Button';
}
