import { Component } from '@angular/core';
import { Folder, LucideAngularModule, Lightbulb, Plus, Users } from 'lucide-angular';

@Component({
  selector: 'component-student-feed-add-post',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './add-post.component.html',
})
export class ComponentStudentFeedAddPost {

  readonly Folder = Folder;
  readonly Lightbulb = Lightbulb;
  readonly Plus = Plus;
  readonly Users = Users;

}
