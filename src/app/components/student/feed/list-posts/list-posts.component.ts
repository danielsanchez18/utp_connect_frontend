import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FeedPost } from '@interfaces/feed-post.interface';
import { LucideAngularModule, Users, UserPlus, EllipsisVertical, X, Eye, MessageCircle, User } from 'lucide-angular';

@Component({
  selector: 'component-student-feed-list-posts',
  imports: [
    LucideAngularModule,
    CommonModule,
  ],
  templateUrl: './list-posts.component.html',
})
export class ComponentStudentFeedListPosts {

  readonly Users = Users;
  readonly User = User;
  readonly UserPlus = UserPlus;
  readonly EllipsisVertical = EllipsisVertical;
  readonly X = X;
  readonly Eye = Eye;
  readonly MessageCircle = MessageCircle;

  posts: FeedPost[] = [
    {
      id: '1',
      user: {
        id: 'u1',
        name: 'Juan',
        lastName: 'Pérez',
        profilePicture: null,
        role: 'Estudiante'
      },
      title: 'Sistema de Gestión Universitaria con Arquitectura MicroServicios en JavaScript',
      content: 'Desarrollo de una plataforma web completa para la gestión integral de estudiantes, profesores y materias utilizando JavaScript, React, Node.js y microservicios. Incluye módulos de inscripciones, notas, horarios y comunicación en tiempo real. El proyecto implementa clean architecture y patrones de diseño para garantizar escalabilidad y mantenimiento fácil.',
      hashtags: ['React', 'Node.js', 'MongoDB', 'Microservicios', 'Docker', 'Clean Architecture'],
      createdAt: '2025-09-26T19:31:00',
      type: 'proyecto',
      isCollaborative: false,
      team: {
        members: [
          { name: 'María Gonzales', initial: 'M' },
          { name: 'Carlos Rodriguez', initial: 'C' },
          { name: 'Ana López', initial: 'A' },
          { name: 'Diego Torres', initial: 'D' }
        ],
        count: 4,
        names: 'María Gonzales, Carlos Rodriguez, Ana López y 1 más'
      },
      document: {
        name: 'GitHub',
        url: 'https://github.com/ejemplo/proyecto'
      },
      likes: 235,
      likedByCurrentUser: false,
      comments: 21
    },
    {
      id: '2',
      user: {
        id: 'u2',
        name: 'Eduardo',
        lastName: 'Torres',
        profilePicture: null,
        role: 'Estudiante'
      },
      title: 'Sistema Test',
      content: 'Test',
      hashtags: ['React'],
      createdAt: '2025-09-26T19:31:00',
      type: 'idea',
      isCollaborative: true,
      team: {
        members: [
          { name: 'María Gonzales', initial: 'M' },
          { name: 'Carlos Rodriguez', initial: 'C' },
          { name: 'Ana López', initial: 'A' },
          { name: 'Diego Torres', initial: 'D' }
        ],
        count: 4,
        names: 'María Gonzales, Carlos Rodriguez, Ana López y 1 más'
      },
      document: {
        name: 'Archivo.pdf',
        url: 'https://github.com/ejemplo/proyecto'
      },
      likes: 235,
      likedByCurrentUser: true,
      comments: 21
    }
  ];

  toggleLike(post: FeedPost) {
    if (post.likedByCurrentUser) {
      post.likes--;
      post.likedByCurrentUser = false;
    } else {
      post.likes++;
      post.likedByCurrentUser = true;
    }
  }

}
