import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentSharedHeader } from '@components/shared/header/header.component';
import { ComponentSharedSidebar } from '@components/shared/sidebar/sidebar.component';

@Component({
  selector: 'layout-student-main',
  imports: [
    RouterOutlet,
    ComponentSharedSidebar,
    ComponentSharedHeader,
],
  templateUrl: './main.component.html',
})
export class LayoutStudentMain { }
