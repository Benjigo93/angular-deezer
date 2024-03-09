import { PlaylistDetail } from "./playlist.detail";

export class PlaylistList {
    playlists: PlaylistDetail[];
    total: number;

    constructor(playlists: PlaylistDetail[], total: number) {
      this.playlists = playlists;
      this.total = total;
    }
}