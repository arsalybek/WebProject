import { Injectable } from '@angular/core';
import {comicCategoryList, ComicsCategories} from './comics-categories';
import {Observable, of} from 'rxjs';
import {Comics, comicsList} from './comics';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {
  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }
  // getCategoryType(): Observable<ComicsCategories[]>{
  //   return of(comicCategoryList);
  // }
  // getComics(id: number): Observable<Comics>{
  //   return of(comicsList.find(comics => comics.id === id));
  // }
  // getComicsByCategory(name: string): Observable<Comics[]>{
  //   return of(comicsList.filter(comics => comics.comic_category_name === name));
  // }
  getComics(name: string, id: number): Observable<Comics>{
    return this.http.get<Comics>(`${this.BASE_URL}/comics/${name}/all/${id}`);
  }
  getComicsByCategory(name: string): Observable<Comics[]>{
       return this.http.get<Comics[]>(`${this.BASE_URL}/comics/${name}/all`);
     }
  getCategoryType(): Observable<ComicsCategories[]>{
    return this.http.get<ComicsCategories[]>(`${this.BASE_URL}/comics/`);
    console.log('Http');
  }
  // getComicsByCategory(id: number): Observable<Comics[]> {
  //   return this.http.get<Comics[]>(`${this.BASE_URL}/comics/${id}/all`);
  // }
}
