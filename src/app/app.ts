import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AppModule } from './app.module';
import { CommonModule } from '@angular/common';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, AppModule, CommonModule, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Proyecto4');
}
