import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentStudentPortfolioGeneral } from '@components/student/portfolio/general/general.component';

@Component({
  selector: 'page-student-portfolio',
  imports: [
    ComponentStudentPortfolioGeneral,
    RouterOutlet
],
  templateUrl: './portfolio.component.html',
})
export class PageStudentPortfolio { }
