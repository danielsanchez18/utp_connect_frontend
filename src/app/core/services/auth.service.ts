import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '@core/utils/api';
import { User } from '@interfaces/users.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = `${API_URL}/auth`;

  /**
   * Realiza login y retorna el token como string
   */
  login(email: string, password: string): Observable<string> {
    const body = new URLSearchParams();
    body.set('email', email);
    body.set('password', password);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    return this.http.post(this.apiUrl + '/login', body.toString(), { headers, responseType: 'text' });
  }

  /**
   * Obtiene el usuario actual usando el token JWT
   */
  currentUser(token: string): Observable<User> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<User>(this.apiUrl + '/current-user', { headers });
  }
}
