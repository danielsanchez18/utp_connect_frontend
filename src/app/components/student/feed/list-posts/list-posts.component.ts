import { Component } from '@angular/core';
import { LucideAngularModule, Users, UserPlus, EllipsisVertical, X, Eye, MessageCircle } from 'lucide-angular';

@Component({
  selector: 'component-student-feed-list-posts',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './list-posts.component.html',
})
export class ComponentStudentFeedListPosts {

  readonly Users = Users;
  readonly UserPlus = UserPlus;
  readonly EllipsisVertical = EllipsisVertical;
  readonly X = X;
  readonly Eye = Eye;
  readonly MessageCircle = MessageCircle;

}
