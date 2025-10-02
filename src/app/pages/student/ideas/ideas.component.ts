import { Component } from '@angular/core';
import { ComponentStudentIdeasAll } from '@components/student/ideas/all/all.component';

@Component({
  selector: 'page-student-ideas',
  imports: [
    ComponentStudentIdeasAll
  ],
  templateUrl: './ideas.component.html',
})
export class PageStudentIdeas { }
