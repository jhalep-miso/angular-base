import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { BookDetail } from './book-detail';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl: string = environment.baseUrl + 'books';
  constructor(private http: HttpClient) {}

  getBooks(): Observable<BookDetail[]> {
    return this.http.get<BookDetail[]>(this.apiUrl);
  }
}
