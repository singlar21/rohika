import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateUsersComponent } from './users/create-users/create-users.component';
import { NotificationComponent } from './core/notification/notification.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CreateUsersComponent,NotificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'rohika-billing';
}
