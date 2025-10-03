import { Component } from '@angular/core';
import { LucideAngularModule, UserPlus } from 'lucide-angular';

@Component({
  selector: 'component-student-profile-suggestions',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './suggestions.component.html',
})
export class ComponentStudentProfileSuggestions {

  readonly UserPlus = UserPlus;

}
