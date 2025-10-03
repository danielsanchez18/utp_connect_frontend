import { User as UserasUserModel } from '@interfaces/users.interface';
import { CommonModule } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { Check, LucideAngularModule, Minus, X, ClipboardMinus, ArrowRightLeft, UserPlus, Folder, Lightbulb, Handshake } from 'lucide-angular';

@Component({
  selector: 'component-student-profile-general',
  imports: [
    LucideAngularModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './general.component.html',
})
export class ComponentStudentProfileGeneral {

  readonly Check = Check;
  readonly X = X;
  readonly Minus = Minus;

  readonly ClipboardMinus = ClipboardMinus;
  readonly ArrowRightLeft = ArrowRightLeft;

  readonly UserPlus = UserPlus;
  readonly Folder = Folder;
  readonly Lightbulb = Lightbulb;
  readonly Handshake = Handshake;


  private authService = inject(AuthService);

  user = signal<UserasUserModel | null>(null);
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
