import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentSharedAlertsError } from '@components/shared/alerts/error/error.component';
import { AuthService } from '@services/auth.service';
import { LucideAngularModule, Info, User, AtSign } from 'lucide-angular';

@Component({
  selector: 'page-login',
  imports: [
    CommonModule,
    LucideAngularModule,
    ReactiveFormsModule,
    ComponentSharedAlertsError
  ],
  templateUrl: './login.component.html',
})
export class PageLogin {

  readonly Info = Info;
  readonly User = User;
  readonly AtSign = AtSign;

  errorMessage = '';
  titleError = '';

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  // Flag de carga
  loading = signal(false);

  // Formulario reactivo
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    rememberMe: [true]
  });

  onSubmit() {
    if (this.loginForm.invalid) return;

    this.loading.set(true);

    const { email, password, rememberMe } = this.loginForm.value;
    this.authService.login(email!, password!).subscribe({
      next: (token: string) => {
        // Guardar el token en localStorage o sessionStorage
        if (rememberMe) {
          localStorage.setItem('token', token);
        } else {
          sessionStorage.setItem('token', token);
        }
        this.loading.set(false);
        this.router.navigate(['/']);
      },
      error: (err: any) => {
        this.loading.set(false);
        // Detectar error de credenciales inválidas (401 o mensaje específico)
        if (err?.status === 401 || err?.status === 403 || err?.error?.message?.toLowerCase().includes('invalid') || err?.error?.message?.toLowerCase().includes('credenciales')) {
          this.titleError = 'Credenciales inválidas';
          this.errorMessage = 'Por favor verifica tu correo y contraseña.';
        } else {
          this.titleError = 'Error de conexión';
          this.errorMessage = 'Error interno, inténtelo más tarde';
        }
        // Mostrar mensaje en el modal
        const errorModalBtn = document.getElementById('open-error-modal');
        if (errorModalBtn) {
          errorModalBtn.click();
        }
      }
    });
  }

}
