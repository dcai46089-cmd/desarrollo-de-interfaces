import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-text-input',
  styleUrl: './text-input.css',
  templateUrl: './text-input.html',
})
export class TextInput {
  value = input('')
  placeholder = input('text input placeholder')
  classType = input<
    'input_default' |
    'input_focus' |
    'input_error'
  >('input_default');

  type = input<'text' | 'password' | 'email' | 'number'>('text')
  disabled = input(false)
  valueChange = output<string>();

  onValueChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.valueChange.emit(inputElement.value)
  }

}
