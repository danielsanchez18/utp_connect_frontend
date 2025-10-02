import { Component } from '@angular/core';
import { LucideAngularModule, Users, UserPlus, EllipsisVertical, X, Eye, MessageCircle, User } from 'lucide-angular';

@Component({
  selector: 'component-student-portfolio-group',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './group.component.html',
})
export class ComponentStudentPortfolioGroup {

  readonly User = User;
  readonly Users = Users;
  readonly UserPlus = UserPlus;
  readonly EllipsisVertical = EllipsisVertical;
  readonly X = X;
  readonly Eye = Eye;
  readonly MessageCircle = MessageCircle;

}
