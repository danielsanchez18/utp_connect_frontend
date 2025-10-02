import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Pencil, MessageCircle, Lightbulb, FileArchive, Calendar1 } from 'lucide-angular';

@Component({
  selector: 'component-student-profile-resume',
  imports: [
    LucideAngularModule,
    RouterLink
  ],
  templateUrl: './resume.component.html',
})
export class ComponentStudentProfileResume {

  readonly Pencil = Pencil;
  readonly MessageCircle = MessageCircle;
  readonly Lightbulb = Lightbulb;
  readonly FileArchive = FileArchive;
  readonly Calendar1 = Calendar1;

}
