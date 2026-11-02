import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstPageComponent } from './pages/first-page-component/first-page-component';

@Component({
  imports: [RouterOutlet, FirstPageComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('proyecto-DI');
}
