import { Component, effect, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { ClipboardListIcon, House, Lightbulb, LucideAngularModule, NewspaperIcon, Bell, TrendingUp, User, Folder, Cog, LogOut } from 'lucide-angular';
import { User as UserModel } from '@interfaces/users.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'component-shared-sidebar',
  imports: [
    LucideAngularModule,
    RouterModule,
    CommonModule
  ],
  templateUrl: './sidebar.component.html',
})
export class ComponentSharedSidebar {

  readonly House = House;
  readonly NewspaperIcon = NewspaperIcon;
  readonly ClipboardListIcon = ClipboardListIcon;
  readonly Lightbulb = Lightbulb;
  readonly Bell = Bell;
  readonly TrendingUp = TrendingUp;
  readonly User = User;
  readonly Folder = Folder;
  readonly Cog = Cog;
  readonly LogOut = LogOut;

  links = [
    { href: "portafolio", text: "Portafolio", icon: Folder },
    { href: "ideas", text: "Semillero de Ideas", icon: Lightbulb },
    // { href: "tendencias", text: "Tendencias", icon: TrendingUp },
    { href: "notificaciones", text: "Notificaciones", icon: Bell },
    { href: "perfil", text: "Mi Perfil", icon: User },
    { href: "configuraciones", text: "Configuraciones", icon: Cog },
  ];

  isMobile: boolean = false;

  private authService = inject(AuthService);

  user = signal<UserModel | null>(null);
  loadingUser = signal(true);

  constructor() {
    effect(() => {
      // Buscar token en localStorage o sessionStorage
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');
      if (token) {
        this.loadingUser.set(true);
        this.authService.currentUser(token).subscribe({
          next: (user) => {
            this.user.set(user);
            this.loadingUser.set(false);
          },
          error: () => {
            this.user.set(null);
            this.loadingUser.set(false);
          }
        });
      } else {
        this.user.set(null);
        this.loadingUser.set(false);
      }
    });
  }

  ngOnInit() {
    this.checkScreenSize();

    window.addEventListener('resize', () => {
      this.checkScreenSize();
    });
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 1024;
  }

  get userName() {
    const u = this.user();
    return u ? `${u.name} ${u.lastName}` : '';
  }

  get userRole() {
    const u = this.user();
    return u && u.roles.length > 0 ? u.roles[0].name : '';
  }

  get userAvatar() {
    const u = this.user();
    // Si tiene foto, retorna la url
    if (u && u.profilePicture) {
      return u.profilePicture;
    }
    // Si no tiene foto, retorna null para mostrar inicial
    return null;
  }

  // Devuelve la inicial del primer nombre si no hay foto
  get userInitial() {
    const u = this.user();
    if (u && u.name) {
      return u.name.charAt(0).toUpperCase();
    }
    return '';
  }

}
