import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router'; // Добавь это

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // И добавь это сюда
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('album-browser');
}
