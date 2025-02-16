import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NotificationComponent } from './core/notification/notification.component';
import { JsonFormatterComponent } from "./json-formatter/json-formatter.component";
import { addDoc, collection } from '@angular/fire/firestore';
import { VisitService } from './services/visit.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NotificationComponent, JsonFormatterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent  implements OnInit{
  
  title = 'rohika-billing';
  visitCount:any = '';

  constructor(private visitService:VisitService) {

  }

  ngOnInit(): void {
    this.visitService.getVisitCount().then(count => {
      this.visitService.incrementVisit();
      this.visitCount = count; // Set visit count when data is fetched
    }).catch(error => {
      console.error("Error fetching visit count:", error);
    });
  }
  
}
