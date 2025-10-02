import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentStudentProfileGeneral } from '@components/student/profile/general/general.component';
import { ComponentStudentProfileSuggestions } from '@components/student/profile/suggestions/suggestions.component';

@Component({
  selector: 'page-student-profile',
  imports: [
    ComponentStudentProfileGeneral,
    ComponentStudentProfileSuggestions,
    RouterOutlet,
  ],
  templateUrl: './profile.component.html',
})
export class PageStudentProfile { }
