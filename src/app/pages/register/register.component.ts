import { Component, inject } from '@angular/core';
import { UserService } from '@services/user.service';
import { LucideAngularModule, Info, User as UserIcon, AtSign } from 'lucide-angular';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ComponentSharedAlertsSuccess } from '@components/shared/alerts/success/success.component';
import { ComponentSharedAlertsError } from '@components/shared/alerts/error/error.component';
import { User } from '@interfaces/users.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'page-register',
  imports: [
    LucideAngularModule,
    ReactiveFormsModule,
    CommonModule,
    ComponentSharedAlertsSuccess,
    ComponentSharedAlertsError,
  ],
  templateUrl: './register.component.html',
})
export class PageRegister {

  readonly User = UserIcon;
  readonly AtSign = AtSign;

  private userService = inject(UserService);
  private router = inject(Router);

  userForm!: FormGroup;
  image: File | null = null;

  successMessage: string = '';
  errorMessage: string = '';
  errorMessageValidator: string = '';

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      lastName: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: [null, [Validators.email, Validators.maxLength(100)]],
      password: [null, [Validators.required]],
    });
  }

  // Función que se ejecuta al enviar el formulario
  onSubmit(): void {

    if (this.userForm.valid) {
      const user: User = this.userForm.value;

      const formData = new FormData();
      formData.append('user', JSON.stringify(user)); // Convertimos el usuario a JSON

      if (this.image) {
        formData.append('image', this.image); // Añadimos la imagen al FormData si existe
      }

      this.userService.create(formData).subscribe({
        next: (response: any) => {
          this.successMessage = response.message || 'Usuario creado exitosamente';
          this.router.navigate(['/']);
          console.log(response);
        },
        error: (err) => {
          this.errorMessage = err.error.error || 'Error al crear el usuario';
          const errorButton = document.querySelector('#open-error-modal') as HTMLElement;
          errorButton?.click();
        },
      });
    }
  }

}

