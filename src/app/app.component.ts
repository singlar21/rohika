import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NotificationComponent } from './core/notification/notification.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,NotificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'rohika-billing';
}
