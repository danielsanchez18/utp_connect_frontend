import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ComponentSharedAlertsError } from '@components/shared/alerts/error/error.component';
import { Post } from '@interfaces/post.interface';
import { User } from '@interfaces/users.interface';
import { AuthService } from '@services/auth.service';
import { PostService } from '@services/post.service';
import { Folder, LucideAngularModule, Lightbulb, Plus, Users, X } from 'lucide-angular';

@Component({
  selector: 'component-student-feed-add-post',
  imports: [
    LucideAngularModule,
    CommonModule,
    ReactiveFormsModule,
    ComponentSharedAlertsError
  ],
  templateUrl: './add-post.component.html',
})
export class ComponentStudentFeedAddPost {

  readonly Folder = Folder;
  readonly Lightbulb = Lightbulb;
  readonly Plus = Plus;
  readonly Users = Users;
  readonly X = X;

  private postService = inject(PostService);

  postForm: FormGroup;
  mediaFiles: File[] = [];
  hashtagInputControl = new FormControl('');

  loading = false;

  currentUser: User | null = null;

  successMessage: string = '';
  errorMessage: string = '';
  errorMessageValidator: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.postForm = this.fb.group({
      type: ['proyecto', Validators.required],
      title: ['', Validators.required],
      content: ['', Validators.required],
      mediaUrls: [[]],
      privacy: ['público', Validators.required],
      isCollaborative: ['no', Validators.required],
      hashtags: [[]],
    });

    this.loadCurrentUser();
  }

  loadCurrentUser() {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (token) {
      this.authService.currentUser(token).subscribe({
        next: user => this.currentUser = user,
        error: () => this.currentUser = null
      });
    }
  }

  onFileChange(event: any) {
    this.mediaFiles = Array.from(event.target.files);
  }

  setType(type: string) {
    this.postForm.get('type')?.setValue(type);
  }

  addHashtag() {
    const value = this.hashtagInputControl.value?.trim();
    if (value && !this.hashtags.includes(value)) {
      this.hashtags.push(value);
      this.postForm.get('hashtags')?.setValue(this.hashtags);
    }
    this.hashtagInputControl.setValue('');
  }

  removeHashtag(index: number) {
    this.hashtags.splice(index, 1);
    this.postForm.get('hashtags')?.setValue(this.hashtags);
  }

  get hashtags(): string[] {
    return this.postForm.get('hashtags')?.value || [];
  }

  onSubmit() {
    if (this.postForm.valid) {
      const post: Post = {
        ...this.postForm.value,
        user: this.currentUser
      };

      const formData = new FormData();
      formData.append('post', JSON.stringify(post));

      this.mediaFiles.forEach(file => formData.append('mediaFiles', file));

      console.log('Enviando post:', post);
      this.postService.create(formData).subscribe({
        next: (createdPost) => {
          console.log('Post creado:', createdPost);
          this.loading = false;
        },
        error: (err) => {
          this.loading = false;
          this.errorMessage = err.error.error || 'Error al crear la publicación';
          const errorButton = document.querySelector('#open-error-modal') as HTMLElement;
          errorButton?.click();
          console.error('Error al crear el post:', err);
        }
      });
    }
  }

}
