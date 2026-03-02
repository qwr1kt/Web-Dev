import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // 1. Добавили импорт
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AlbumService } from '../../services/album.service';
import { Album } from '../../models';

@Component({
  selector: 'app-album-detail',
  standalone: true, 
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})
export class AlbumDetail implements OnInit {
  album: Album | null = null;
  photoLimit: number = 50;
  loading = true;
  error = '';
  editedTitle = '';
  saving = false;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private location: Location,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.editedTitle = data.title;
        this.loading = false;
        
        this.cdr.detectChanges(); 
      },
      error: (err) => {
        console.error(err);
        this.error = 'Failed to load album';
        this.loading = false;
        this.cdr.detectChanges(); 
      },
    });
  }

  save() {
  if (this.album) {
    this.saving = true;
    const updated = { ...this.album, title: this.editedTitle };

    this.albumService.updateAlbum(updated).subscribe({
      next: (res) => {
        // 1. Обновляем локальный объект на странице
        this.album = res;
        
        this.albumService.CachedAlbum(res);
        
        this.saving = false;
        // alert('Saved successfully!');
      },
      error: () => {
        this.saving = false;
        alert('Error saving');
      }
    });
  }
}

  back(): void {
    this.location.back();
  }
}