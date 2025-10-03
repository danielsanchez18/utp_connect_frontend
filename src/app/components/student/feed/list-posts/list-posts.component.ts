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
    user: { id: 'u1', name: 'Juan', lastName: 'Pérez', profilePicture: null, role: 'Estudiante' },
    title: 'Sistema de Gestión Universitaria con Arquitectura MicroServicios en JavaScript',
    content: 'Desarrollo de una plataforma web completa para la gestión integral de estudiantes, profesores y materias utilizando JavaScript, React, Node.js y microservicios. Incluye módulos de inscripciones, notas, horarios y comunicación en tiempo real.',
    hashtags: ['React', 'Node.js', 'MongoDB', 'Microservicios', 'Docker', 'Clean Architecture'],
    createdAt: '2025-09-26T19:31:00',
    type: 'proyecto',
    isCollaborative: false,
    team: { members: [{ name: 'María Gonzales', initial: 'M' }, { name: 'Carlos Rodriguez', initial: 'C' }, { name: 'Ana López', initial: 'A' }, { name: 'Diego Torres', initial: 'D' }], count: 4, names: 'María Gonzales, Carlos Rodriguez, Ana López y 1 más' },
    document: { name: 'GitHub', url: 'https://github.com/ejemplo/proyecto' },
    likes: 235,
    likedByCurrentUser: false,
    comments: 21
  },
  {
    id: '2',
    user: { id: 'u2', name: 'Eduardo', lastName: 'Torres', profilePicture: null, role: 'Estudiante' },
    title: 'Sistema de Reservas de Laboratorios con QR',
    content: 'Una plataforma que permite a los estudiantes reservar laboratorios mediante códigos QR generados en la aplicación, evitando aglomeraciones y mejorando la gestión de espacios en la universidad.',
    hashtags: ['Java', 'Spring Boot', 'QR', 'PostgreSQL'],
    createdAt: '2025-09-27T10:12:00',
    type: 'idea',
    isCollaborative: true,
    team: { members: [{ name: 'Lucía Ramírez', initial: 'L' }, { name: 'Jorge Medina', initial: 'J' }], count: 2, names: 'Lucía Ramírez y Jorge Medina' },
    document: { name: 'Documento.pdf', url: 'https://github.com/ejemplo/laboratorios' },
    likes: 120,
    likedByCurrentUser: true,
    comments: 10
  },
  {
    id: '3',
    user: { id: 'u3', name: 'Valeria', lastName: 'Morales', profilePicture: null, role: 'Estudiante' },
    title: 'Diseño de un Centro Cultural Sostenible',
    content: 'Proyecto arquitectónico que integra espacios de lectura, arte y música con un diseño bioclimático, materiales reciclados y techos verdes para la eficiencia energética.',
    hashtags: ['Arquitectura', 'Sostenibilidad', 'Diseño'],
    createdAt: '2025-09-28T15:45:00',
    type: 'proyecto',
    isCollaborative: false,
    team: { members: [{ name: 'Pedro Castillo', initial: 'P' }, { name: 'Sofía Herrera', initial: 'S' }], count: 2, names: 'Pedro Castillo y Sofía Herrera' },
    document: { name: 'Plano.dwg', url: 'https://drive.google.com/ejemplo/plano' },
    likes: 87,
    likedByCurrentUser: false,
    comments: 12
  },
  {
    id: '4',
    user: { id: 'u4', name: 'Luis', lastName: 'Fernández', profilePicture: null, role: 'Estudiante' },
    title: 'App de Telemedicina para Consultas Básicas',
    content: 'Aplicación móvil que conecta a pacientes con médicos en tiempo real para consultas básicas y seguimiento de tratamientos, priorizando zonas rurales con baja cobertura médica.',
    hashtags: ['Salud', 'Flutter', 'API', 'Telemedicina'],
    createdAt: '2025-09-29T11:20:00',
    type: 'proyecto',
    isCollaborative: true,
    team: { members: [{ name: 'Ana Torres', initial: 'A' }, { name: 'Marco Ruiz', initial: 'M' }, { name: 'Daniela Silva', initial: 'D' }], count: 3, names: 'Ana Torres, Marco Ruiz y 1 más' },
    document: { name: 'Figma', url: 'https://figma.com/ejemplo/app' },
    likes: 200,
    likedByCurrentUser: true,
    comments: 34
  },
  {
    id: '5',
    user: { id: 'u5', name: 'Carolina', lastName: 'Soto', profilePicture: null, role: 'Estudiante' },
    title: 'Estudio de Psicología sobre Ansiedad Académica',
    content: 'Investigación cualitativa y cuantitativa acerca de los factores que generan ansiedad en los estudiantes durante periodos de exámenes, y propuestas de intervención psicológica.',
    hashtags: ['Psicología', 'Investigación', 'Educación'],
    createdAt: '2025-09-29T17:05:00',
    type: 'idea',
    isCollaborative: false,
    team: { members: [{ name: 'Gabriel Muñoz', initial: 'G' }], count: 1, names: 'Gabriel Muñoz' },
    document: { name: 'Encuesta.xlsx', url: 'https://drive.google.com/ejemplo/encuesta' },
    likes: 75,
    likedByCurrentUser: false,
    comments: 8
  },
  {
    id: '6',
    user: { id: 'u6', name: 'Andrés', lastName: 'Vargas', profilePicture: null, role: 'Estudiante' },
    title: 'Plataforma de Juicios Simulados en Derecho',
    content: 'Herramienta digital para la práctica de casos judiciales ficticios donde los estudiantes de derecho pueden asumir roles de juez, fiscal o abogado defensor.',
    hashtags: ['Derecho', 'Educación', 'Simulación'],
    createdAt: '2025-09-30T13:50:00',
    type: 'proyecto',
    isCollaborative: true,
    team: { members: [{ name: 'Laura Díaz', initial: 'L' }, { name: 'Hugo Castro', initial: 'H' }], count: 2, names: 'Laura Díaz y Hugo Castro' },
    document: { name: 'Manual.pdf', url: 'https://github.com/ejemplo/derecho' },
    likes: 134,
    likedByCurrentUser: false,
    comments: 15
  },
  {
    id: '7',
    user: { id: 'u7', name: 'Sofía', lastName: 'Martínez', profilePicture: null, role: 'Estudiante' },
    title: 'Análisis de Suelos para Construcción de Puentes',
    content: 'Proyecto de ingeniería civil donde se evalúan las propiedades de distintos tipos de suelos para determinar su idoneidad en la construcción de puentes.',
    hashtags: ['Ingeniería Civil', 'Geotecnia', 'Construcción'],
    createdAt: '2025-10-01T08:40:00',
    type: 'proyecto',
    isCollaborative: false,
    team: { members: [{ name: 'Ricardo Molina', initial: 'R' }, { name: 'Marta Rojas', initial: 'M' }], count: 2, names: 'Ricardo Molina y Marta Rojas' },
    document: { name: 'Informe.docx', url: 'https://drive.google.com/ejemplo/informe' },
    likes: 89,
    likedByCurrentUser: true,
    comments: 9
  },
  {
    id: '8',
    user: { id: 'u8', name: 'Pedro', lastName: 'Ramírez', profilePicture: null, role: 'Estudiante' },
    title: 'Estrategia de Marketing para una Startup de Energías Renovables',
    content: 'Desarrollo de un plan de marketing digital para una startup enfocada en paneles solares, con campañas en redes sociales y modelos de negocio sostenibles.',
    hashtags: ['Marketing', 'Energías Renovables', 'Startups'],
    createdAt: '2025-10-01T12:25:00',
    type: 'idea',
    isCollaborative: true,
    team: { members: [{ name: 'Carmen Paredes', initial: 'C' }, { name: 'Felipe Soto', initial: 'F' }], count: 2, names: 'Carmen Paredes y Felipe Soto' },
    document: { name: 'Presentación.pptx', url: 'https://drive.google.com/ejemplo/presentacion' },
    likes: 143,
    likedByCurrentUser: false,
    comments: 11
  },
  {
    id: '9',
    user: { id: 'u9', name: 'Elena', lastName: 'García', profilePicture: null, role: 'Estudiante' },
    title: 'Aplicación de Diseño Gráfico con IA para Creativos',
    content: 'Herramienta que utiliza inteligencia artificial para generar paletas de colores y propuestas de diseño gráfico personalizadas según las preferencias del usuario.',
    hashtags: ['Diseño Gráfico', 'IA', 'Creatividad'],
    createdAt: '2025-10-02T09:10:00',
    type: 'proyecto',
    isCollaborative: false,
    team: { members: [{ name: 'Tomás Medina', initial: 'T' }], count: 1, names: 'Tomás Medina' },
    document: { name: 'Prototipo.fig', url: 'https://figma.com/ejemplo/diseno' },
    likes: 210,
    likedByCurrentUser: true,
    comments: 19
  },
  {
    id: '10',
    user: { id: 'u10', name: 'Fernando', lastName: 'Quispe', profilePicture: null, role: 'Estudiante' },
    title: 'Simulación de Finanzas Personales en Excel',
    content: 'Modelo en Excel que ayuda a los estudiantes a planificar presupuestos mensuales, ahorros e inversiones, con gráficos dinámicos y proyecciones.',
    hashtags: ['Finanzas', 'Excel', 'Educación'],
    createdAt: '2025-10-02T16:55:00',
    type: 'idea',
    isCollaborative: false,
    team: { members: [{ name: 'Juliana Vega', initial: 'J' }], count: 1, names: 'Juliana Vega' },
    document: { name: 'Plantilla.xlsx', url: 'https://drive.google.com/ejemplo/excel' },
    likes: 67,
    likedByCurrentUser: false,
    comments: 5
  },
  {
    id: '11',
    user: { id: 'u11', name: 'Marcelo', lastName: 'Suárez', profilePicture: null, role: 'Estudiante' },
    title: 'Sistema de Control de Inventario para Farmacias',
    content: 'Aplicación web que permite controlar stock, fechas de vencimiento y alertas automáticas para farmacias pequeñas.',
    hashtags: ['Spring Boot', 'MySQL', 'Inventario'],
    createdAt: '2025-10-03T10:00:00',
    type: 'proyecto',
    isCollaborative: true,
    team: { members: [{ name: 'Rosa Méndez', initial: 'R' }], count: 1, names: 'Rosa Méndez' },
    document: { name: 'Repo Git', url: 'https://github.com/ejemplo/inventario' },
    likes: 98,
    likedByCurrentUser: false,
    comments: 6
  },
  {
    id: '12',
    user: { id: 'u12', name: 'Lucía', lastName: 'Ortega', profilePicture: null, role: 'Estudiante' },
    title: 'Estudio de Mercado para un Café Universitario',
    content: 'Investigación de preferencias de los estudiantes para la creación de un café temático dentro de la universidad.',
    hashtags: ['Marketing', 'Investigación', 'Consumo'],
    createdAt: '2025-10-03T12:40:00',
    type: 'idea',
    isCollaborative: false,
    team: { members: [{ name: 'Luis Bravo', initial: 'L' }], count: 1, names: 'Luis Bravo' },
    document: { name: 'Encuesta.pdf', url: 'https://drive.google.com/ejemplo/cafe' },
    likes: 54,
    likedByCurrentUser: true,
    comments: 3
  },
  {
    id: '13',
    user: { id: 'u13', name: 'Natalia', lastName: 'Díaz', profilePicture: null, role: 'Estudiante' },
    title: 'App para Gestión de Tareas con Gamificación',
    content: 'Aplicación que motiva a estudiantes a cumplir tareas convirtiéndolas en retos con recompensas virtuales.',
    hashtags: ['Flutter', 'Firebase', 'Gamificación'],
    createdAt: '2025-10-03T15:20:00',
    type: 'proyecto',
    isCollaborative: true,
    team: { members: [{ name: 'Carlos Vega', initial: 'C' }, { name: 'Andrea López', initial: 'A' }], count: 2, names: 'Carlos Vega y Andrea López' },
    document: { name: 'APK', url: 'https://drive.google.com/ejemplo/app' },
    likes: 176,
    likedByCurrentUser: true,
    comments: 20
  },
  {
    id: '14',
    user: { id: 'u14', name: 'Diego', lastName: 'Mendoza', profilePicture: null, role: 'Estudiante' },
    title: 'Sistema de Riego Inteligente para Agricultura',
    content: 'Dispositivo IoT que regula el riego de cultivos según humedad del suelo y clima en tiempo real.',
    hashtags: ['IoT', 'Arduino', 'Agricultura'],
    createdAt: '2025-10-03T18:00:00',
    type: 'proyecto',
    isCollaborative: false,
    team: { members: [{ name: 'Paola Ramos', initial: 'P' }], count: 1, names: 'Paola Ramos' },
    document: { name: 'Esquema.pdf', url: 'https://drive.google.com/ejemplo/riego' },
    likes: 145,
    likedByCurrentUser: false,
    comments: 14
  },
  {
    id: '15',
    user: { id: 'u15', name: 'Gabriela', lastName: 'Núñez', profilePicture: null, role: 'Estudiante' },
    title: 'Plataforma de Apoyo para Estudiantes con Discapacidad Visual',
    content: 'Proyecto de inclusión que ofrece material de estudio en audiolibros y compatibilidad con lectores de pantalla.',
    hashtags: ['Inclusión', 'Accesibilidad', 'Educación'],
    createdAt: '2025-10-04T09:00:00',
    type: 'idea',
    isCollaborative: true,
    team: { members: [{ name: 'Miguel Soto', initial: 'M' }, { name: 'Sofía Ramírez', initial: 'S' }], count: 2, names: 'Miguel Soto y Sofía Ramírez' },
    document: { name: 'Propuesta.docx', url: 'https://drive.google.com/ejemplo/discapacidad' },
    likes: 112,
    likedByCurrentUser: true,
    comments: 7
  },
  {
    id: '16',
    user: { id: 'u16', name: 'Jorge', lastName: 'Cárdenas', profilePicture: null, role: 'Estudiante' },
    title: 'Análisis de Impacto Ambiental en Construcción de Carreteras',
    content: 'Investigación sobre los efectos de nuevas carreteras en ecosistemas locales, con propuestas de mitigación.',
    hashtags: ['Medio Ambiente', 'Ingeniería', 'Construcción'],
    createdAt: '2025-10-04T11:30:00',
    type: 'idea',
    isCollaborative: false,
    team: { members: [{ name: 'Valeria León', initial: 'V' }], count: 1, names: 'Valeria León' },
    document: { name: 'Informe.docx', url: 'https://drive.google.com/ejemplo/ambiental' },
    likes: 68,
    likedByCurrentUser: false,
    comments: 4
  },
  {
    id: '17',
    user: { id: 'u17', name: 'Patricia', lastName: 'Campos', profilePicture: null, role: 'Estudiante' },
    title: 'Chatbot para Orientación Vocacional',
    content: 'Desarrollo de un chatbot con IA que guía a los estudiantes en la elección de su carrera universitaria.',
    hashtags: ['IA', 'Chatbot', 'Orientación'],
    createdAt: '2025-10-04T14:15:00',
    type: 'proyecto',
    isCollaborative: true,
    team: { members: [{ name: 'Raúl Fernández', initial: 'R' }, { name: 'Daniel López', initial: 'D' }], count: 2, names: 'Raúl Fernández y Daniel López' },
    document: { name: 'Código', url: 'https://github.com/ejemplo/chatbot' },
    likes: 220,
    likedByCurrentUser: true,
    comments: 18
  },
  {
    id: '18',
    user: { id: 'u18', name: 'Oscar', lastName: 'Delgado', profilePicture: null, role: 'Estudiante' },
    title: 'Sistema de Control de Asistencia con Reconocimiento Facial',
    content: 'Aplicación que registra la asistencia en clases mediante cámaras y algoritmos de visión por computadora.',
    hashtags: ['Python', 'OpenCV', 'Educación'],
    createdAt: '2025-10-04T16:45:00',
    type: 'proyecto',
    isCollaborative: false,
    team: { members: [{ name: 'Andrea Torres', initial: 'A' }], count: 1, names: 'Andrea Torres' },
    document: { name: 'Demo.mp4', url: 'https://drive.google.com/ejemplo/asistencia' },
    likes: 190,
    likedByCurrentUser: false,
    comments: 16
  },
  {
    id: '19',
    user: { id: 'u19', name: 'Camila', lastName: 'Salazar', profilePicture: null, role: 'Estudiante' },
    title: 'Diseño de un Parque Urbano con Áreas Verdes Inteligentes',
    content: 'Propuesta arquitectónica que combina áreas recreativas con sensores que regulan iluminación y riego.',
    hashtags: ['Arquitectura', 'Smart City', 'Sostenibilidad'],
    createdAt: '2025-10-04T19:30:00',
    type: 'idea',
    isCollaborative: true,
    team: { members: [{ name: 'Fernando Rivas', initial: 'F' }, { name: 'Alejandra Ponce', initial: 'A' }], count: 2, names: 'Fernando Rivas y Alejandra Ponce' },
    document: { name: 'Render.png', url: 'https://drive.google.com/ejemplo/parque' },
    likes: 130,
    likedByCurrentUser: false,
    comments: 10
  },
  {
    id: '20',
    user: { id: 'u20', name: 'Mateo', lastName: 'Ibarra', profilePicture: null, role: 'Estudiante' },
    title: 'Sistema de Recomendación de Libros para Bibliotecas',
    content: 'Aplicación web que recomienda libros a estudiantes basándose en su historial de lectura y calificaciones.',
    hashtags: ['Machine Learning', 'Bibliotecas', 'Recomendaciones'],
    createdAt: '2025-10-04T21:10:00',
    type: 'proyecto',
    isCollaborative: true,
    team: { members: [{ name: 'Isabel Romero', initial: 'I' }, { name: 'Santiago Herrera', initial: 'S' }], count: 2, names: 'Isabel Romero y Santiago Herrera' },
    document: { name: 'Repo GitHub', url: 'https://github.com/ejemplo/libros' },
    likes: 250,
    likedByCurrentUser: true,
    comments: 25
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
