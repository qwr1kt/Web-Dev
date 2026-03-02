import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // 1. Добавили импорт
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css',
})
export class AlbumPhotos implements OnInit {
  
  albumId = 0;
  photos: Photo[] = [];
  loading = true;
  error = '';

  constructor(
    private route: ActivatedRoute, 
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));

    this.route.queryParamMap.subscribe(params => {
      const limit = Number(params.get('limit')) || 50; 

      this.albumService.getAlbumPhotos(this.albumId).subscribe({
        next: (data) => {
          this.photos = data.slice(0, limit); 
          
          this.loading = false;
          this.cdr.detectChanges(); 
        },
        error: () => {
          this.loading = false;
          this.cdr.detectChanges();
        }
      });
    });
  }
}