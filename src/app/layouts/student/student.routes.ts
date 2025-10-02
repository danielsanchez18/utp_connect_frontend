import { Routes } from "@angular/router";
import { LayoutStudentMain } from "./main/main.component";

export const STUDENT_ROUTES: Routes = [
  {
    path: '',
    component: LayoutStudentMain,
    children: [
      {
        path: '',
        loadComponent: () => import('@pages/student/feed/feed.component').then(m => m.PageStudentFeed)
      },
      {
        path: 'portafolio',
        loadComponent: () => import('@pages/student/portfolio/portfolio.component').then(m => m.PageStudentPortfolio),
        children: [
          {
            path: '',
            loadComponent: () => import('@components/student/portfolio/all/all.component').then(m => m.ComponentStudentPortfolioAll)
          },
          {
            path: 'personal',
            loadComponent: () => import('@components/student/portfolio/personal/personal.component').then(m => m.ComponentStudentPortfolioPersonal)
          },
          {
            path: 'grupal',
            loadComponent: () => import('@components/student/portfolio/group/group.component').then(m => m.ComponentStudentPortfolioGroup)
          },
          {
            path: 'populares',
            loadComponent: () => import('@components/student/portfolio/popular/popular.component').then(m => m.ComponentStudentPortfolioPopular)
          }
        ]
      },
      {
        path: 'ideas',
        loadComponent: () => import('@pages/student/ideas/ideas.component').then(m => m.PageStudentIdeas)
      },
      {
        path: 'tendencias',
        loadComponent: () => import('@pages/student/trends/trends.component').then(m => m.PageStudentTrends)
      },
      {
        path: 'notificaciones',
        loadComponent: () => import('@pages/student/notifications/notifications.component').then(m => m.PageStudentNotifications)
      },
      {
        path: 'perfil',
        loadComponent: () => import('@pages/student/profile/profile.component').then(m => m.PageStudentProfile),
        children: [
          {
            path: '',
            loadComponent: () => import('@components/student/profile/resume/resume.component').then(m => m.ComponentStudentProfileResume)
          },
          {
            path: 'portafolio',
            loadComponent: () => import('@components/student/profile/portfolio/portfolio.component').then(m => m.ComponentStudentProfilePortfolio)
          },
          {
            path: 'ideas',
            loadComponent: () => import('@components/student/profile/ideas/ideas.component').then(m => m.ComponentStudentProfileIdeas)
          },
          {
            path: 'propuestas',
            loadComponent: () => import('@components/student/profile/suggestions/suggestions.component').then(m => m.ComponentStudentProfileSuggestions)
          }
        ]
      },
      {
        path: 'configuraciones',
        loadComponent: () => import('@pages/student/configurations/configurations.component').then(m => m.PageStudentConfigurations)
      }
    ]
  }
];
