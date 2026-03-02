import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models';
@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.html',
  styleUrl: './albums.css'
})
export class Albums implements OnInit {
  albums: Album[] = [];
  deletedIds: number[] = []; 

  constructor(
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const saved = localStorage.getItem('deleted_album_ids');
    this.deletedIds = saved ? JSON.parse(saved) : [];

    this.albumService.getAlbums().subscribe({
      next: (data) => {
        // this.albums = data.filter(album => !this.deletedIds.includes(album.id));
        this.albums = data.filter(album =>!this.deletedIds.includes(album.id));
        this.cdr.detectChanges(); 
      },
      error: (err) => console.error('Ошибка загрузки:', err)
    });
  }

  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe(() => {
        this.deletedIds.push(id);
        
        localStorage.setItem('deleted_album_ids', JSON.stringify(this.deletedIds));

        this.albums = this.albums.filter(a => a.id !== id);
        this.cdr.detectChanges(); 
    });
  }
}