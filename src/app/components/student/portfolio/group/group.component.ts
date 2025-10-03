import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FeedPost } from '@interfaces/feed-post.interface';
import { LucideAngularModule, Users, UserPlus, EllipsisVertical, X, Eye, MessageCircle, User } from 'lucide-angular';

@Component({
  selector: 'component-student-portfolio-group',
  imports: [
    LucideAngularModule,
    CommonModule
  ],
  templateUrl: './group.component.html',
})
export class ComponentStudentPortfolioGroup {

  readonly User = User;
  readonly Users = Users;
  readonly UserPlus = UserPlus;
  readonly EllipsisVertical = EllipsisVertical;
  readonly X = X;
  readonly Eye = Eye;
  readonly MessageCircle = MessageCircle;

  posts: FeedPost[] = [
    {
      id: '18',
      user: {
        id: 'u1', // Juan Pérez
        name: 'Juan',
        lastName: 'Pérez',
        profilePicture: null,
        role: 'Estudiante'
      },
      title: 'Proyecto de Minería de Datos: Análisis de sentimiento en Redes Sociales',
      content: 'Desarrollo de un modelo predictivo para analizar la polaridad de comentarios en Twitter sobre temas específicos, utilizando Python, NLTK y técnicas de aprendizaje profundo. Es un proyecto grupal con enfoque en el procesamiento de lenguaje natural (NLP).',
      hashtags: ['Python', 'NLP', 'DataMining', 'DeepLearning', 'TensorFlow'],
      createdAt: '2025-10-04T10:00:00',
      type: 'proyecto',
      isCollaborative: true,
      team: {
        members: [
          { name: 'Juan Pérez', initial: 'J' },
          { name: 'Sofía Jiménez', initial: 'S' },
          { name: 'Marco Ríos', initial: 'M' },
          { name: 'Elena Castro', initial: 'E' }
        ],
        count: 4,
        names: 'Sofía Jiménez, Marco Ríos, Elena Castro y 1 más' // Juan Pérez siempre se cuenta como "y X más" si no es el primer autor listado.
      },
      document: {
        name: 'GitHub Repo',
        url: 'https://github.com/u1/mining-social-media'
      },
      likes: 85,
      likedByCurrentUser: false,
      comments: 11
    },
    {
      id: '19',
      user: {
        id: 'u1', // Juan Pérez
        name: 'Juan',
        lastName: 'Pérez',
        profilePicture: null,
        role: 'Estudiante'
      },
      title: 'Idea de App Móvil: Gestión de Tareas Académicas Gamificada',
      content: 'Buscamos diseñador UI/UX y un desarrollador en Kotlin/Swift para crear una aplicación donde los estudiantes ganan puntos y logros al completar tareas y prepararse para exámenes. ¡Colaboración abierta!',
      hashtags: ['Idea', 'Gamificación', 'MobileDev', 'Kotlin', 'UI/UX'],
      createdAt: '2025-10-04T14:30:00',
      type: 'idea',
      isCollaborative: true,
      team: {
        members: [
          { name: 'Juan Pérez', initial: 'J' },
          { name: 'Daniel Torres', initial: 'D' },
          { name: 'Ana López', initial: 'A' }
        ],
        count: 3,
        names: 'Daniel Torres, Ana López y 1 más'
      },
      likes: 55,
      likedByCurrentUser: true,
      comments: 15
    },
    {
      id: '20',
      user: {
        id: 'u1', // Juan Pérez
        name: 'Juan',
        lastName: 'Pérez',
        profilePicture: null,
        role: 'Estudiante'
      },
      title: 'Recopilación de Material de Estudio para Examen de Álgebra Lineal',
      content: 'Mi grupo y yo hemos subido un PDF con ejercicios resueltos y notas de clase consolidadas sobre transformaciones lineales y autovalores. Útil para el examen de la próxima semana.',
      hashtags: ['ÁlgebraLineal', 'Matemáticas', 'Recurso', 'Estudio'],
      createdAt: '2025-10-05T09:00:00',
      type: 'recurso',
      isCollaborative: true,
      team: {
        members: [
          { name: 'Juan Pérez', initial: 'J' },
          { name: 'Carlos Rodriguez', initial: 'C' }
        ],
        count: 2,
        names: 'Juan Pérez y Carlos Rodriguez' // Solo dos miembros
      },
      document: {
        name: 'AlgebraLineal_Resumen.pdf',
        url: 'https://drive.google.com/u1/algebra'
      },
      likes: 120,
      likedByCurrentUser: false,
      comments: 5
    },

    // --- Otras publicaciones grupales (colaboradores diferentes) ---

    {
      id: '21',
      user: {
        id: 'u18',
        name: 'Gabriela',
        lastName: 'Noriega',
        profilePicture: null,
        role: 'Estudiante'
      },
      title: 'Plataforma de Donaciones con Blockchain (Hyperledger Fabric)',
      content: 'Proyecto enfocado en la trazabilidad y transparencia de donaciones usando tecnología Blockchain. El equipo está utilizando Hyperledger Fabric y Vue.js para el frontend.',
      hashtags: ['Blockchain', 'Hyperledger', 'Vuejs', 'Web3', 'Cripto'],
      createdAt: '2025-10-05T15:00:00',
      type: 'proyecto',
      isCollaborative: true,
      team: {
        members: [
          { name: 'Gabriela Noriega', initial: 'G' },
          { name: 'Roberto Suárez', initial: 'R' },
          { name: 'Lucía Méndez', initial: 'L' },
          { name: 'Pedro Morales', initial: 'P' },
          { name: 'Elena Castro', initial: 'E' }
        ],
        count: 5,
        names: 'Gabriela Noriega, Roberto Suárez, Lucía Méndez y 2 más'
      },
      document: {
        name: 'Whitepaper',
        url: 'https://gitlab.com/blockchain-donaciones'
      },
      likes: 98,
      likedByCurrentUser: false,
      comments: 13
    },
    {
      id: '22',
      user: {
        id: 'u19',
        name: 'Hugo',
        lastName: 'Méndez',
        profilePicture: null,
        role: 'Estudiante'
      },
      title: 'Organización de Torneo de Videojuegos para la Facultad',
      content: 'Estamos organizando un torneo de eSports para recaudar fondos para el viaje de egreso. Buscamos voluntarios para patrocinio, streaming y logística. ¡Únete al equipo organizador!',
      hashtags: ['Evento', 'eSports', 'Torneo', 'Voluntariado', 'Logística'],
      createdAt: '2025-10-06T11:00:00',
      type: 'evento',
      isCollaborative: true,
      team: {
        members: [
          { name: 'Hugo Méndez', initial: 'H' },
          { name: 'Ana Ruiz', initial: 'A' },
          { name: 'Javier Vidal', initial: 'J' },
          { name: 'Marta Vargas', initial: 'M' }
        ],
        count: 4,
        names: 'Hugo Méndez, Ana Ruiz, Javier Vidal y 1 más'
      },
      likes: 155,
      likedByCurrentUser: true,
      comments: 28
    },
    {
      id: '23',
      user: {
        id: 'u20',
        name: 'Andrea',
        lastName: 'Ramos',
        profilePicture: null,
        role: 'Estudiante'
      },
      title: 'Buscando ayuda para debugging en proyecto de compiladores (C)',
      content: 'Mi equipo y yo estamos atascados con un error de segmentación al optimizar el código intermedio de nuestro compilador. Buscamos a alguien con experiencia en C y manejo de memoria a bajo nivel.',
      hashtags: ['C', 'Compiladores', 'Debugging', 'Memoria', 'Duda'],
      createdAt: '2025-10-06T19:00:00',
      type: 'duda',
      isCollaborative: true,
      team: {
        members: [
          { name: 'Andrea Ramos', initial: 'A' },
          { name: 'Felipe Núñez', initial: 'F' }
        ],
        count: 2,
        names: 'Andrea Ramos y Felipe Núñez'
      },
      document: {
        name: 'Segmentacion.c',
        url: 'https://pastebin.com/compilador-error'
      },
      likes: 40,
      likedByCurrentUser: false,
      comments: 6
    },
    {
      id: '24',
      user: {
        id: 'u21',
        name: 'Miguel',
        lastName: 'Paz',
        profilePicture: null,
        role: 'Estudiante'
      },
      title: 'Guía Colaborativa: Docker Compose para entornos de desarrollo',
      content: 'Estamos armando una guía completa para configurar entornos de desarrollo con múltiples servicios (DB, backend, frontend) usando Docker Compose. Aceptamos pull requests y sugerencias.',
      hashtags: ['Docker', 'DevOps', 'DockerCompose', 'Guía', 'Colaboración'],
      createdAt: '2025-10-07T08:30:00',
      type: 'recurso',
      isCollaborative: true,
      team: {
        members: [
          { name: 'Miguel Paz', initial: 'M' },
          { name: 'Isabel Paz', initial: 'I' },
          { name: 'David Castro', initial: 'D' },
          { name: 'Luisa Díaz', initial: 'L' },
          { name: 'Ricardo Sánchez', initial: 'R' }
        ],
        count: 5,
        names: 'Miguel Paz, Isabel Paz, David Castro y 2 más'
      },
      document: {
        name: 'GitBook',
        url: 'https://gitbook.io/docker-compose-dev'
      },
      likes: 110,
      likedByCurrentUser: false,
      comments: 17
    },
    {
      id: '25',
      user: {
        id: 'u22',
        name: 'Carolina',
        lastName: 'Flores',
        profilePicture: null,
        role: 'Estudiante'
      },
      title: 'Aplicación de seguimiento de dieta y ejercicio con GraphQL y Apollo',
      content: 'Frontend en React y API con GraphQL (Apollo Server). Buscamos un especialista en optimización de consultas GraphQL. El proyecto está muy avanzado.',
      hashtags: ['GraphQL', 'Apollo', 'React', 'Frontend', 'Backend'],
      createdAt: '2025-10-07T14:00:00',
      type: 'proyecto',
      isCollaborative: true,
      team: {
        members: [
          { name: 'Carolina Flores', initial: 'C' },
          { name: 'Martín Soto', initial: 'M' },
          { name: 'Valentina Muñoz', initial: 'V' }
        ],
        count: 3,
        names: 'Carolina Flores, Martín Soto y 1 más'
      },
      document: {
        name: 'Postman Collection',
        url: 'https://documenter.getpostman.com/apollo-api'
      },
      likes: 72,
      likedByCurrentUser: true,
      comments: 8
    },
    {
      id: '26',
      user: {
        id: 'u23',
        name: 'Santiago',
        lastName: 'Cruz',
        profilePicture: null,
        role: 'Estudiante'
      },
      title: 'Propuesta: Charla sobre Desarrollo de Videojuegos Indie con Godot Engine',
      content: 'Mi equipo y yo queremos dar una charla práctica introductoria al desarrollo de juegos 2D con Godot. Necesitamos ayuda para coordinar un espacio y hora con el centro de estudiantes.',
      hashtags: ['GodotEngine', 'Videojuegos', 'IndieDev', 'Evento', 'Charla'],
      createdAt: '2025-10-08T10:00:00',
      type: 'idea',
      isCollaborative: true,
      team: {
        members: [
          { name: 'Santiago Cruz', initial: 'S' },
          { name: 'Roberto Vidal', initial: 'R' },
          { name: 'Elena Reyes', initial: 'E' }
        ],
        count: 3,
        names: 'Santiago Cruz, Roberto Vidal y 1 más'
      },
      likes: 90,
      likedByCurrentUser: false,
      comments: 19
    },
    {
      id: '27',
      user: {
        id: 'u24',
        name: 'Mariana',
        lastName: 'López',
        profilePicture: null,
        role: 'Estudiante'
      },
      title: 'Librería de Componentes UI en Svelte con Tailwind CSS',
      content: 'Estamos creando una librería de componentes reusable y accesible para proyectos en Svelte. Buscamos desarrolladores Svelte para aumentar la variedad de componentes.',
      hashtags: ['Svelte', 'TailwindCSS', 'Frontend', 'Componentes', 'UI/UX'],
      createdAt: '2025-10-08T15:30:00',
      type: 'proyecto',
      isCollaborative: true,
      team: {
        members: [
          { name: 'Mariana López', initial: 'M' },
          { name: 'Javier García', initial: 'J' },
          { name: 'Hugo Méndez', initial: 'H' },
          { name: 'Ana López', initial: 'A' },
          { name: 'Pedro Acosta', initial: 'P' }
        ],
        count: 5,
        names: 'Mariana López, Javier García, Hugo Méndez y 2 más'
      },
      document: {
        name: 'Storybook Docs',
        url: 'https://storybook.js.org/svelte-ui'
      },
      likes: 68,
      likedByCurrentUser: true,
      comments: 10
    },
    {
      id: '28',
      user: {
        id: 'u25',
        name: 'Fabián',
        lastName: 'Vargas',
        profilePicture: null,
        role: 'Estudiante'
      },
      title: 'Traducción y Subtitulado de Conferencias de Sistemas Operativos (OS)',
      content: 'Un grupo de compañeros y yo estamos subtitulando al español las conferencias más importantes de OS (O(1) Scheduling, Kernel Design, etc.). Si sabes inglés y tienes tiempo, ¡únete!',
      hashtags: ['SistemasOperativos', 'Traducción', 'Recurso', 'Colaboración'],
      createdAt: '2025-10-09T09:45:00',
      type: 'recurso',
      isCollaborative: true,
      team: {
        members: [
          { name: 'Fabián Vargas', initial: 'F' },
          { name: 'Laura Mena', initial: 'L' },
          { name: 'Andrés Pinto', initial: 'A' },
          { name: 'Juan Pérez', initial: 'J' } // Juan Pérez como colaborador
        ],
        count: 4,
        names: 'Fabián Vargas, Laura Mena, Andrés Pinto y 1 más'
      },
      document: {
        name: 'Canal YouTube',
        url: 'https://youtube.com/os-subtitulado'
      },
      likes: 130,
      likedByCurrentUser: false,
      comments: 22
    },
    {
      id: '29',
      user: {
        id: 'u26',
        name: 'Jesús',
        lastName: 'Morales',
        profilePicture: null,
        role: 'Estudiante'
      },
      title: 'Sistema de simulación cuántica para el curso de Física Computacional',
      content: 'Estamos desarrollando un entorno para simular circuitos cuánticos (qubits) utilizando Qiskit. Buscamos un estudiante avanzado en física cuántica o computación cuántica para verificar los resultados.',
      hashtags: ['ComputaciónCuántica', 'Qiskit', 'Física', 'Simulación', 'Python'],
      createdAt: '2025-10-09T16:00:00',
      type: 'proyecto',
      isCollaborative: true,
      team: {
        members: [
          { name: 'Jesús Morales', initial: 'J' },
          { name: 'Diana Soto', initial: 'D' },
          { name: 'Valentina Muñoz', initial: 'V' },
          { name: 'Eduardo Torres', initial: 'E' }
        ],
        count: 4,
        names: 'Jesús Morales, Diana Soto, Valentina Muñoz y 1 más'
      },
      document: {
        name: 'Notebooks Jupyter',
        url: 'https://github.com/q-simulacion'
      },
      likes: 102,
      likedByCurrentUser: true,
      comments: 16
    },
    {
      id: '30',
      user: {
        id: 'u27',
        name: 'Paula',
        lastName: 'Gómez',
        profilePicture: null,
        role: 'Estudiante'
      },
      title: 'Taller de Introducción a Haskell (Programación Funcional)',
      content: 'Junto a otros compañeros, daremos un taller de 3 horas sobre los conceptos básicos de Haskell, inmutabilidad y funciones puras. Inscríbete en el link.',
      hashtags: ['Haskell', 'Funcional', 'Programación', 'Workshop', 'Evento'],
      createdAt: '2025-10-10T11:30:00',
      type: 'evento',
      isCollaborative: true,
      team: {
        members: [
          { name: 'Paula Gómez', initial: 'P' },
          { name: 'Ricardo Sánchez', initial: 'R' }
        ],
        count: 2,
        names: 'Paula Gómez y Ricardo Sánchez'
      },
      document: {
        name: 'Formulario de Inscripción',
        url: 'https://forms.gle/taller-haskell'
      },
      likes: 80,
      likedByCurrentUser: false,
      comments: 5
    },
    {
      id: '31',
      user: {
        id: 'u28',
        name: 'Rubén',
        lastName: 'Marín',
        profilePicture: null,
        role: 'Estudiante'
      },
      title: 'Idea: Plugin de VS Code para el auto-formateo de documentación',
      content: 'Me gustaría crear una extensión de VS Code que use IA para mejorar automáticamente la sintaxis y gramática de los JSDocs/TypeDocs. Necesito un desarrollador de extensiones y alguien con experiencia en NLP.',
      hashtags: ['VSCode', 'Extensión', 'NLP', 'Idea', 'TypeScript'],
      createdAt: '2025-10-10T14:00:00',
      type: 'idea',
      isCollaborative: true,
      team: {
        members: [
          { name: 'Rubén Marín', initial: 'R' },
          { name: 'David Castro', initial: 'D' },
          { name: 'Juan Pérez', initial: 'J' }, // Juan Pérez como colaborador
          { name: 'Luisa Díaz', initial: 'L' }
        ],
        count: 4,
        names: 'Rubén Marín, David Castro, Juan Pérez y 1 más'
      },
      likes: 62,
      likedByCurrentUser: true,
      comments: 13
    },
    {
      id: '32',
      user: {
        id: 'u29',
        name: 'Natalia',
        lastName: 'Ramos',
        profilePicture: null,
        role: 'Estudiante'
      },
      title: 'Despliegue de Aplicación Monolítica a Microservicios con Kubernetes',
      content: 'Un proyecto de migración. Hemos tomado una aplicación legacy en PHP y la estamos separando en microservicios en Go y Python, orquestados por Kubernetes. Usamos Helm para el despliegue.',
      hashtags: ['Kubernetes', 'Microservicios', 'DevOps', 'Go', 'Python'],
      createdAt: '2025-10-11T09:15:00',
      type: 'proyecto',
      isCollaborative: true,
      team: {
        members: [
          { name: 'Natalia Ramos', initial: 'N' },
          { name: 'Fabián Vargas', initial: 'F' },
          { name: 'Carlos Rodriguez', initial: 'C' }
        ],
        count: 3,
        names: 'Natalia Ramos, Fabián Vargas y 1 más'
      },
      document: {
        name: 'Diagrama K8s',
        url: 'https://drive.google.com/k8s-arch'
      },
      likes: 145,
      likedByCurrentUser: false,
      comments: 25
    }
  ];

}
