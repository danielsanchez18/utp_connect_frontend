import { Component } from '@angular/core';
import { LucideAngularModule, UserPlus } from 'lucide-angular';

@Component({
  selector: 'component-student-profile-recommendations',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './recommendations.component.html',
})
export class ComponentStudentProfileRecommendations {

  readonly UserPlus = UserPlus;

}
