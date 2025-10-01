import { Routes } from "@angular/router";
import { LayoutStudentMain } from "./main/main.component";
import { PageStudentFeed } from "@pages/student/feed/feed.component";

export const STUDENT_ROUTES: Routes = [
  {
    path: '',
    component: LayoutStudentMain,
    children: [
      {
        path: '', component: PageStudentFeed
      },
    ]
  }
];
