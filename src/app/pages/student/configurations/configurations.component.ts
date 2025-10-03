import { Component } from '@angular/core';
import { ComponentStudentConfigurationsFeed } from '@components/student/configurations/feed/feed.component';

@Component({
  selector: 'page-student-configurations',
  imports: [
    ComponentStudentConfigurationsFeed
  ],
  templateUrl: './configurations.component.html',
})
export class PageStudentConfigurations { }
