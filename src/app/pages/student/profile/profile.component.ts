import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentStudentProfileAchievements } from '@components/student/profile/achievements/achievements.component';
import { ComponentStudentProfileGeneral } from '@components/student/profile/general/general.component';
import { ComponentStudentProfileRecommendations } from "@components/student/profile/recommendations/recommendations.component";

@Component({
  selector: 'page-student-profile',
  imports: [
    ComponentStudentProfileGeneral,
    ComponentStudentProfileAchievements,
    RouterOutlet,
    ComponentStudentProfileRecommendations
],
  templateUrl: './profile.component.html',
})
export class PageStudentProfile { }
