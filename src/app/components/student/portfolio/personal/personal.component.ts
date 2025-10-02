import { Component } from '@angular/core';
import { LucideAngularModule, Users, UserPlus, EllipsisVertical, X, Eye, MessageCircle, User } from 'lucide-angular';

@Component({
  selector: 'component-student-portfolio-personal',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './personal.component.html',
})
export class ComponentStudentPortfolioPersonal {

  readonly User = User;
  readonly Users = Users;
  readonly UserPlus = UserPlus;
  readonly EllipsisVertical = EllipsisVertical;
  readonly X = X;
  readonly Eye = Eye;
  readonly MessageCircle = MessageCircle;

}
