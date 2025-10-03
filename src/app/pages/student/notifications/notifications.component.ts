import { Component } from '@angular/core';
import { ComponentStudentNotificationsList } from "@components/student/notifications/list/list.component";

@Component({
  selector: 'page-student-notifications',
  imports: [
    ComponentStudentNotificationsList
  ],
  templateUrl: './notifications.component.html',
})
export class PageStudentNotifications { }
