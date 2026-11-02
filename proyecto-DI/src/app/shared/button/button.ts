import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-button',
  styleUrl: './button.css',
  templateUrl: './button.html',
})
export class Button {
  text = input('Button Primary');
  classType = input<
  'primary'|
  'primary-mid-width'|
  'secondary-mid-width'|
  'close-session-navbar'|
  'edit-user-profile'|
  'delete-user-profile'>('primary');

  disabled = input(false);

  pressed = output<void>();
}
