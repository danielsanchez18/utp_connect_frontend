import { Component } from '@angular/core';
import { Heart, LucideAngularModule, Megaphone } from 'lucide-angular';

@Component({
  selector: 'component-student-notifications-list',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './list.component.html',
})
export class ComponentStudentNotificationsList {

  readonly Megaphone = Megaphone;
  readonly Heart = Heart;

}
