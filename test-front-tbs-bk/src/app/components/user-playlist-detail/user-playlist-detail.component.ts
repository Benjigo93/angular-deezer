import { Component, Input, SimpleChanges } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { DeezerService } from '../../services/deezer.service';
import { PlaylistDetail } from '../../models/playlist.detail';
import { Track } from '../../models/track';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-user-playlist-detail',
  templateUrl: './user-playlist-detail.component.html',
  styleUrl: './user-playlist-detail.component.sass'
})
export class UserPlaylistDetailComponent {

  @Input() playlist: PlaylistDetail;
  private index: number;
  cols!: Column[];

  constructor(private deezerService: DeezerService) {
    this.index = 0 ;
  }

  ngOnInit() {
    this.cols = [
      { field: 'album', header: 'Cover' },
      { field: 'title_short', header: 'Title' },
      { field: 'artist', header: 'Artist' },
      { field: 'duration', header: 'Duration' },
    ];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      typeof changes['playlist'].currentValue != 'undefined' 
      && (!changes['playlist'].previousValue 
        || changes['playlist'].previousValue.id !== changes['playlist'].currentValue.id)
    ){
      this.index = 0
      this.getTracks(this.index)
    }
  }

  getTracks(index: number) {
    console.log(this.playlist)
    if (!this.playlist.tracks || 
        (this.playlist.tracks.length < this.playlist.nb_tracks)
      ){
      this.deezerService.getPlaylistTracks(this.playlist.id, index)
      .subscribe((trackList: Track[]) => {
        console.log(trackList.length)
        if (!this.playlist.tracks) {
          this.playlist.tracks = []
        }
        this.playlist.tracks = [...this.playlist.tracks, ...trackList]
        this.index += trackList.length
        console.log(this.playlist)
      });
    }
  }

  formatDuration(duration: number): string {
    return new Date(duration * 1000).toISOString().substring(11, 19)
  }

  loadTracksLazy(): void{
    this.getTracks(this.index)
  }

}
