import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PlaylistList } from '../models/playlist.list';
import { PlaylistDetail } from '../models/playlist.detail';
import { Track } from '../models/track';


@Injectable({providedIn: 'root'})
export class DeezerService {
  private baseUrl = environment.apiURL;

  constructor(private http: HttpClient) {}

  getPlaylistListByUser(userId: number = 5, index: number = 0) : Observable<PlaylistList>{
    return this.http.get<PlaylistList>(`${this.baseUrl}user/${userId}/playlists?index=${index}`)
    .pipe(
      map((res: any) => new PlaylistList(res.data, res.total))
    );
  }

  getPlaylistDetail(playlistId: number): Observable<PlaylistDetail> {
    return this.http.get<PlaylistDetail>(`${this.baseUrl}playlist/${playlistId}`);
  }

  getPlaylistTracks(playlistId: number, index: number = 0): Observable<Track[]> {
    console.log(`${this.baseUrl}playlist/${playlistId}/tracks?index=${index}`)
    return this.http.get<Track[]>(`${this.baseUrl}playlist/${playlistId}/tracks?index=${index}`)
    .pipe(
      map((res: any) => res.data)
    );
  }
}