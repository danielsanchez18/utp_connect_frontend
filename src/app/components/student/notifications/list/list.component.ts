import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Heart, LucideAngularModule, Megaphone } from 'lucide-angular';

@Component({
  selector: 'component-student-notifications-list',
  imports: [
    LucideAngularModule,
    CommonModule
  ],
  templateUrl: './list.component.html',
})
export class ComponentStudentNotificationsList {

  readonly Megaphone = Megaphone;
  readonly Heart = Heart;

}
