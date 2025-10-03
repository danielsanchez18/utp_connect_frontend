import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '@core/utils/api';
import { Observable } from 'rxjs';
import { Post } from '@interfaces/post.interface';
import { PaginatedResponse } from '@interfaces/paginated-response.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private http = inject(HttpClient);
  private apiUrl = `${API_URL}/posts`;

  // create(post: Post, mediaFiles?: File[]): Observable<Post> {
  //   const formData = new FormData();
  //   formData.append('post', JSON.stringify(post));
  //   if (mediaFiles) {
  //     mediaFiles.forEach(file => formData.append('mediaFiles', file));
  //   }
  //   return this.http.post<Post>(this.apiUrl, formData);
  // }

  create(formData: FormData): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, formData);
  }

  getById(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`);
  }

  getAll(page: number, size: number): Observable<PaginatedResponse<Post>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<PaginatedResponse<Post>>(this.apiUrl, { params });
  }

  update(id: string, post: Post, mediaFiles?: File[]): Observable<Post> {
    const formData = new FormData();
    formData.append('post', JSON.stringify(post));
    if (mediaFiles) {
      mediaFiles.forEach(file => formData.append('mediaFiles', file));
    }
    return this.http.put<Post>(`${this.apiUrl}/${id}`, formData);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
