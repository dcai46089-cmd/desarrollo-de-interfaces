import { Component } from '@angular/core';
import { Button } from '../../shared/button/button';

@Component({
  imports: [Button],
  selector: 'app-first-page-component',
  styleUrl: './first-page-component.css',
  templateUrl: './first-page-component.html',
})
export class FirstPageComponent {

  onPressed():void{
    console.log('button pressed');
  }
}
