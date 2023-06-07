import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-button-outline',
  templateUrl: './button-outline.component.html',
  styleUrls: ['./button-outline.component.css'],
})
export class ButtonOutlineComponent {
  @Input() text = 'help';
}
