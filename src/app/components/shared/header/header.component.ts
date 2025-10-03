import { Component, inject, signal, computed, effect } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { User as UserModel } from '@interfaces/users.interface';
import { Bell, ChevronDown, ChevronUp, Cog, LogOut, LucideAngularModule, User, Users } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'component-shared-header',
  imports: [
    CommonModule,
    LucideAngularModule
  ],
  templateUrl: './header.component.html',
})
export class ComponentSharedHeader {

  readonly Bell = Bell;
  readonly ChevronDown = ChevronDown;
  readonly ChevronUp = ChevronUp;

  readonly User = User;
  readonly Users = Users;
  readonly Cog = Cog;
  readonly LogOut = LogOut;

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
