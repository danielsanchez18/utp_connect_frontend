import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Pencil, MessageCircle, Lightbulb, FileArchive, Calendar1, Users, User } from 'lucide-angular';


@Component({
  selector: 'component-student-profile-ideas',
  imports: [
    LucideAngularModule,
    RouterLink
  ],
  templateUrl: './ideas.component.html',
})
export class ComponentStudentProfileIdeas {

  readonly Pencil = Pencil;
  readonly MessageCircle = MessageCircle;
  readonly Lightbulb = Lightbulb;
  readonly FileArchive = FileArchive;
  readonly Calendar1 = Calendar1;
  readonly Users = Users;
  readonly User = User;

}
