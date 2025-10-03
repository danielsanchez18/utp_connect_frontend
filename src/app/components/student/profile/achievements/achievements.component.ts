import { Component } from '@angular/core';
import { Heart, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'component-student-profile-achievements',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './achievements.component.html',
})
export class ComponentStudentProfileAchievements {

  readonly Heart = Heart;

}
