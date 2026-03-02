import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs'; // Добавили of и tap

import { Album, Photo } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';
  
  // Хранилище для альбомов в памяти сервиса
  private cachedAlbums: Album[] | null = null;

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    // Если в кэше уже есть данные, отдаем их (через 'of'), не дергая интернет
    if (this.cachedAlbums) {
      return of(this.cachedAlbums);
    }
    
    // Если кэш пустой, идем в интернет и сохраняем результат через 'tap'
    return this.http.get<Album[]>(`${this.baseUrl}/albums`).pipe(
      tap(data => this.cachedAlbums = data)
    );
  }

  // Новый метод: обновляет локальный кэш после удаления в компоненте
  updateLocalCache(updatedAlbums: Album[]) {
    this.cachedAlbums = updatedAlbums;
  }


CachedAlbum(updatedAlbum: Album) {
  if (this.cachedAlbums) {
    const index = this.cachedAlbums.findIndex(a => a.id === updatedAlbum.id);
    if (index !== -1) {
      this.cachedAlbums[index] = updatedAlbum; // Заменяем старый на новый
    }
  }
}

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.baseUrl}/albums/${id}`);
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/photos?albumId=${id}`);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.baseUrl}/albums/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/albums/${id}`);
  }
}