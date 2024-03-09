import { Component, HostListener } from '@angular/core';
import { PlaylistDetail } from '../../models/playlist.detail';
import { DeezerService } from '../../services/deezer.service';
import { PlaylistList } from '../../models/playlist.list';

@Component({
  selector: 'app-user-playlist-list',
  templateUrl: './user-playlist-list.component.html',
  styleUrl: './user-playlist-list.component.sass'
})
export class UserPlaylistListComponent {

  userPlaylists: PlaylistDetail[] = [];
  userName: string = "";
  isLoading: boolean;
  isLastPage: boolean = false;
  modalVisible: boolean = false;
  activePlaylist: PlaylistDetail;

  private index: number;

  constructor(private deezerService: DeezerService) { 
    this.index = 0 ;
  }

  ngOnInit(): void {
    this.getPage(this.index);
  }

  getPage(index: number) {
    if(!this.isLoading && !this.isLastPage) {
      this.isLoading = true;
      this.deezerService.getPlaylistListByUser(5, index)
      .subscribe((list: PlaylistList) => {
        if(list.playlists.length < 25) {
          this.isLastPage = true;
        }
        if (this.userName === "") {
          this.userName = list.playlists[0].creator.name
        }
        this.userPlaylists.push(...list.playlists)
        this.index += list.playlists.length
        this.isLoading = false;
      });
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    const element = event.target.scrollingElement;
    if(element.scrollHeight - element.scrollTop < 1000) {
      this.getPage(this.index);
    }
  }

  onDetail(playlist: PlaylistDetail): void {
    this.activePlaylist = playlist
    this.modalVisible = true
  }

}
