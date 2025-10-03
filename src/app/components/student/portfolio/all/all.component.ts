import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FeedPost } from '@interfaces/feed-post.interface';
import { LucideAngularModule, Users, UserPlus, EllipsisVertical, X, Eye, MessageCircle, User } from 'lucide-angular';

@Component({
  selector: 'component-student-portfolio-all',
  imports: [
    LucideAngularModule,
    CommonModule
  ],
  templateUrl: './all.component.html',
})
export class ComponentStudentPortfolioAll {

  readonly User = User;
  readonly Users = Users;
  readonly UserPlus = UserPlus;
  readonly EllipsisVertical = EllipsisVertical;
  readonly X = X;
  readonly Eye = Eye;
  readonly MessageCircle = MessageCircle;

  posts: FeedPost[] = [
  {
    id: '1',
    user: { id: 'uEdu', name: 'Eduardo', lastName: 'De La Torre', profilePicture: null, role: 'Estudiante' },
    title: 'Plataforma de Tutorías Académicas con Inteligencia Artificial',
    content: 'Un sistema que conecta a estudiantes con tutores en línea usando IA para recomendar el mejor tutor según el estilo de aprendizaje.',
    hashtags: ['IA', 'MachineLearning', 'Python', 'FastAPI', 'React'],
    createdAt: '2025-09-10T15:20:00',
    type: 'proyecto',
    isCollaborative: true,
    team: { members: [{ name: 'Sofía Morales', initial: 'S' }, { name: 'Luis Herrera', initial: 'L' }], count: 3, names: 'Sofía Morales, Luis Herrera y 1 más' },
    document: { name: 'Repositorio GitHub', url: 'https://github.com/eduardo/tutorias-ia' },
    likes: 150, likedByCurrentUser: false, comments: 12
  },
  {
    id: '2',
    user: { id: 'uEdu', name: 'Eduardo', lastName: 'De La Torre', profilePicture: null, role: 'Estudiante' },
    title: 'Sistema de Reservas para Gimnasio',
    content: 'Una aplicación móvil que permite a los usuarios reservar máquinas y entrenadores personales en tiempo real.',
    hashtags: ['Flutter', 'Firebase', 'UX'],
    createdAt: '2025-09-12T09:00:00',
    type: 'idea',
    isCollaborative: false,
    team: { members: [], count: 0, names: '' },
    document: { name: 'Mockup.pdf', url: 'https://drive.google.com/mockup' },
    likes: 98, likedByCurrentUser: true, comments: 7
  },
  {
    id: '3',
    user: { id: 'uEdu', name: 'Eduardo', lastName: 'De La Torre', profilePicture: null, role: 'Estudiante' },
    title: 'Asistente Virtual para la Universidad',
    content: 'Chatbot con IA que responde preguntas frecuentes sobre cursos, matrículas y calendarios académicos.',
    hashtags: ['Chatbot', 'IA', 'NLP'],
    createdAt: '2025-09-13T11:45:00',
    type: 'proyecto',
    isCollaborative: true,
    team: { members: [{ name: 'Valeria Díaz', initial: 'V' }, { name: 'Andrés Castro', initial: 'A' }, { name: 'Miguel Torres', initial: 'M' }], count: 4, names: 'Valeria Díaz, Andrés Castro, Miguel Torres y 1 más' },
    document: { name: 'Diseño UML', url: 'https://github.com/eduardo/uml-bot' },
    likes: 220, likedByCurrentUser: false, comments: 33
  },
  {
    id: '4',
    user: { id: 'uEdu', name: 'Eduardo', lastName: 'De La Torre', profilePicture: null, role: 'Estudiante' },
    title: 'Plataforma de Voluntariado Universitario',
    content: 'Aplicación web donde los estudiantes pueden registrarse y unirse a proyectos sociales.',
    hashtags: ['Node.js', 'MongoDB', 'React'],
    createdAt: '2025-09-14T08:15:00',
    type: 'idea',
    isCollaborative: false,
    team: { members: [], count: 0, names: '' },
    document: { name: 'Propuesta.pdf', url: 'https://drive.com/propuesta' },
    likes: 67, likedByCurrentUser: false, comments: 3
  },
  {
    id: '5',
    user: { id: 'uEdu', name: 'Eduardo', lastName: 'De La Torre', profilePicture: null, role: 'Estudiante' },
    title: 'App para Control de Gastos Estudiantiles',
    content: 'Aplicación móvil que permite a los universitarios gestionar sus finanzas personales y dividir gastos con amigos.',
    hashtags: ['Kotlin', 'Android', 'SQLite'],
    createdAt: '2025-09-15T19:00:00',
    type: 'proyecto',
    isCollaborative: false,
    team: { members: [], count: 0, names: '' },
    document: { name: 'Prototipo Figma', url: 'https://figma.com/finanzas-app' },
    likes: 142, likedByCurrentUser: true, comments: 18
  },
  {
    id: '6',
    user: { id: 'uEdu', name: 'Eduardo', lastName: 'De La Torre', profilePicture: null, role: 'Estudiante' },
    title: 'Gestor de Prácticas Profesionales',
    content: 'Sistema que conecta empresas con estudiantes en busca de prácticas profesionales.',
    hashtags: ['Java', 'Spring Boot', 'PostgreSQL'],
    createdAt: '2025-09-16T10:30:00',
    type: 'proyecto',
    isCollaborative: true,
    team: { members: [{ name: 'Claudia Reyes', initial: 'C' }, { name: 'Fernando Ramos', initial: 'F' }], count: 3, names: 'Claudia Reyes, Fernando Ramos y 1 más' },
    document: { name: 'Guía Técnica', url: 'https://github.com/eduardo/gestor-practicas' },
    likes: 187, likedByCurrentUser: false, comments: 14
  },
  {
    id: '7',
    user: { id: 'uEdu', name: 'Eduardo', lastName: 'De La Torre', profilePicture: null, role: 'Estudiante' },
    title: 'Sistema de Alquiler de Canchas Deportivas',
    content: 'Plataforma para reservar canchas de fútbol y vóley en línea con pago integrado.',
    hashtags: ['PHP', 'MySQL', 'Bootstrap'],
    createdAt: '2025-09-17T13:00:00',
    type: 'idea',
    isCollaborative: false,
    team: { members: [], count: 0, names: '' },
    document: { name: 'Documento de Requisitos', url: 'https://drive.com/requisitos' },
    likes: 75, likedByCurrentUser: false, comments: 6
  },
  {
    id: '8',
    user: { id: 'uEdu', name: 'Eduardo', lastName: 'De La Torre', profilePicture: null, role: 'Estudiante' },
    title: 'Sistema de Gestión de Bibliotecas Universitarias',
    content: 'Aplicación que permite préstamos, devoluciones y catálogos digitales.',
    hashtags: ['Angular', 'Spring', 'MySQL'],
    createdAt: '2025-09-18T17:40:00',
    type: 'proyecto',
    isCollaborative: true,
    team: { members: [{ name: 'Diana Vargas', initial: 'D' }, { name: 'Hugo López', initial: 'H' }], count: 3, names: 'Diana Vargas, Hugo López y 1 más' },
    document: { name: 'Diagrama ER', url: 'https://github.com/eduardo/diagrama-biblio' },
    likes: 210, likedByCurrentUser: true, comments: 27
  },
  {
    id: '9',
    user: { id: 'uEdu', name: 'Eduardo', lastName: 'De La Torre', profilePicture: null, role: 'Estudiante' },
    title: 'Red Social para Universitarios',
    content: 'Un espacio digital donde estudiantes pueden compartir proyectos e ideas.',
    hashtags: ['Next.js', 'Tailwind', 'Node.js'],
    createdAt: '2025-09-19T14:20:00',
    type: 'idea',
    isCollaborative: false,
    team: { members: [], count: 0, names: '' },
    document: { name: 'Wireframes.pdf', url: 'https://drive.com/wireframes' },
    likes: 135, likedByCurrentUser: false, comments: 9
  },
  {
    id: '10',
    user: { id: 'uEdu', name: 'Eduardo', lastName: 'De La Torre', profilePicture: null, role: 'Estudiante' },
    title: 'Marketplace de Servicios Estudiantiles',
    content: 'Una app para que estudiantes ofrezcan servicios como tutorías, diseño o programación.',
    hashtags: ['Laravel', 'Vue.js', 'API REST'],
    createdAt: '2025-09-20T09:50:00',
    type: 'proyecto',
    isCollaborative: true,
    team: { members: [{ name: 'Gabriela Soto', initial: 'G' }, { name: 'Ricardo Méndez', initial: 'R' }], count: 3, names: 'Gabriela Soto, Ricardo Méndez y 1 más' },
    document: { name: 'Manual de Usuario', url: 'https://github.com/eduardo/manual-marketplace' },
    likes: 198, likedByCurrentUser: true, comments: 15
  },
  {
    id: '11',
    user: { id: 'uEdu', name: 'Eduardo', lastName: 'De La Torre', profilePicture: null, role: 'Estudiante' },
    title: 'App para Gestión de Eventos Estudiantiles',
    content: 'Aplicación para organizar y registrar asistencia a talleres y conferencias universitarias.',
    hashtags: ['Ionic', 'Firebase'],
    createdAt: '2025-09-21T16:30:00',
    type: 'idea',
    isCollaborative: false,
    team: { members: [], count: 0, names: '' },
    document: { name: 'Pitch.pdf', url: 'https://drive.com/pitch-eventos' },
    likes: 102, likedByCurrentUser: false, comments: 11
  },
  {
    id: '12',
    user: { id: 'uEdu', name: 'Eduardo', lastName: 'De La Torre', profilePicture: null, role: 'Estudiante' },
    title: 'Sistema de Encuestas en Tiempo Real',
    content: 'Aplicación web para encuestas en clases con gráficos dinámicos en vivo.',
    hashtags: ['React', 'WebSockets', 'Chart.js'],
    createdAt: '2025-09-22T09:10:00',
    type: 'proyecto',
    isCollaborative: false,
    team: { members: [], count: 0, names: '' },
    document: { name: 'Presentación.pptx', url: 'https://drive.com/encuestas' },
    likes: 80, likedByCurrentUser: true, comments: 5
  },
  {
    id: '13',
    user: { id: 'uEdu', name: 'Eduardo', lastName: 'De La Torre', profilePicture: null, role: 'Estudiante' },
    title: 'Plataforma de Intercambio de Libros',
    content: 'App que conecta estudiantes para intercambio o donación de libros de texto.',
    hashtags: ['React Native', 'Node.js'],
    createdAt: '2025-09-23T18:45:00',
    type: 'proyecto',
    isCollaborative: true,
    team: { members: [{ name: 'Mario Pérez', initial: 'M' }], count: 2, names: 'Mario Pérez y 1 más' },
    document: { name: 'Documento Funcional', url: 'https://github.com/eduardo/libros' },
    likes: 145, likedByCurrentUser: false, comments: 13
  },
  {
    id: '14',
    user: { id: 'uEdu', name: 'Eduardo', lastName: 'De La Torre', profilePicture: null, role: 'Estudiante' },
    title: 'Sistema de Evaluación Docente',
    content: 'Aplicación que permite evaluar cursos y docentes de manera anónima.',
    hashtags: ['Django', 'PostgreSQL'],
    createdAt: '2025-09-24T12:00:00',
    type: 'idea',
    isCollaborative: false,
    team: { members: [], count: 0, names: '' },
    document: { name: 'Informe.docx', url: 'https://drive.com/informe-evaluacion' },
    likes: 73, likedByCurrentUser: false, comments: 4
  },
  {
    id: '15',
    user: { id: 'uEdu', name: 'Eduardo', lastName: 'De La Torre', profilePicture: null, role: 'Estudiante' },
    title: 'Plataforma de Mentorías Académicas',
    content: 'App que conecta alumnos avanzados con estudiantes de primeros ciclos.',
    hashtags: ['Express', 'MongoDB'],
    createdAt: '2025-09-25T08:20:00',
    type: 'proyecto',
    isCollaborative: true,
    team: { members: [{ name: 'Laura Fernández', initial: 'L' }, { name: 'Daniel Ruiz', initial: 'D' }], count: 3, names: 'Laura Fernández, Daniel Ruiz y 1 más' },
    document: { name: 'Casos de Uso', url: 'https://github.com/eduardo/mentorias' },
    likes: 162, likedByCurrentUser: true, comments: 19
  },
  {
    id: '16',
    user: { id: 'uEdu', name: 'Eduardo', lastName: 'De La Torre', profilePicture: null, role: 'Estudiante' },
    title: 'App para Seguimiento de Hábitos',
    content: 'Aplicación móvil que ayuda a los estudiantes a mantener hábitos saludables.',
    hashtags: ['Flutter', 'SQLite'],
    createdAt: '2025-09-26T14:30:00',
    type: 'idea',
    isCollaborative: false,
    team: { members: [], count: 0, names: '' },
    document: { name: 'Diseño Figma', url: 'https://figma.com/habitos' },
    likes: 90, likedByCurrentUser: true, comments: 6
  },
  {
    id: '17',
    user: { id: 'uEdu', name: 'Eduardo', lastName: 'De La Torre', profilePicture: null, role: 'Estudiante' },
    title: 'Sistema de Recomendación de Cursos',
    content: 'Motor de recomendaciones para sugerir cursos en base a historial académico.',
    hashtags: ['Python', 'Pandas', 'IA'],
    createdAt: '2025-09-27T11:15:00',
    type: 'proyecto',
    isCollaborative: false,
    team: { members: [], count: 0, names: '' },
    document: { name: 'ModeloML.ipynb', url: 'https://github.com/eduardo/recomendador' },
    likes: 132, likedByCurrentUser: false, comments: 10
  },
  {
    id: '18',
    user: { id: 'uEdu', name: 'Eduardo', lastName: 'De La Torre', profilePicture: null, role: 'Estudiante' },
    title: 'Plataforma de Networking Estudiantil',
    content: 'Espacio para que estudiantes creen perfiles y se conecten con otros por intereses comunes.',
    hashtags: ['React', 'Node.js', 'GraphQL'],
    createdAt: '2025-09-28T17:00:00',
    type: 'idea',
    isCollaborative: false,
    team: { members: [], count: 0, names: '' },
    document: { name: 'Propuesta.docx', url: 'https://drive.com/networking' },
    likes: 110, likedByCurrentUser: false, comments: 8
  },
  {
    id: '19',
    user: { id: 'uEdu', name: 'Eduardo', lastName: 'De La Torre', profilePicture: null, role: 'Estudiante' },
    title: 'Sistema de Certificados Digitales',
    content: 'Aplicación que genera y valida certificados académicos con blockchain.',
    hashtags: ['Blockchain', 'Ethereum', 'SmartContracts'],
    createdAt: '2025-09-29T20:40:00',
    type: 'proyecto',
    isCollaborative: true,
    team: { members: [{ name: 'Pedro Jiménez', initial: 'P' }, { name: 'Andrea Castillo', initial: 'A' }], count: 3, names: 'Pedro Jiménez, Andrea Castillo y 1 más' },
    document: { name: 'SmartContract.sol', url: 'https://github.com/eduardo/certificados' },
    likes: 250, likedByCurrentUser: true, comments: 30
  },
  {
    id: '20',
    user: { id: 'uEdu', name: 'Eduardo', lastName: 'De La Torre', profilePicture: null, role: 'Estudiante' },
    title: 'Plataforma de Exámenes Online Seguros',
    content: 'Sistema que aplica reconocimiento facial y detección de plagio en evaluaciones en línea.',
    hashtags: ['IA', 'TensorFlow', 'Proctoring'],
    createdAt: '2025-09-30T09:25:00',
    type: 'proyecto',
    isCollaborative: false,
    team: { members: [], count: 0, names: '' },
    document: { name: 'Documento Técnico', url: 'https://github.com/eduardo/examenes' },
    likes: 175, likedByCurrentUser: false, comments: 16
  }
];


}
