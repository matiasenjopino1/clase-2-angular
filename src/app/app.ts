import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; //Para poder usar ngModel
import { CommonModule } from '@angular/common';
import { Registro } from './registro/registro';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule,Registro],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   protected readonly title = signal('clase-1-angular');

   edad:string = '25'
}
