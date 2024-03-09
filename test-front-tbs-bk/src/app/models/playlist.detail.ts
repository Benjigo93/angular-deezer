import { Track } from "./track";

export class PlaylistDetail {
    id: number;
    title: string;
    description: string;
    duration: number;
    public: boolean;
    is_loved_track: boolean;
    collaborative: boolean;
    nb_tracks: number;
    fans: number;
    link: string;
    share: string;
    picture: string;
    picture_small: string;
    picture_medium: string;
    picture_big: string;
    picture_xl: string;
    checksum: string;
    tracklist: string;
    creation_date: string;
    md5_image: string;
    picture_type: string;
    time_add: number | null;
    time_mod: number | null;
    creator: Creator
    type: string;
    tracks: Track[];
    constructor() {
      this.description = "";
      this.share = "";
      this.time_add = null;
      this.time_mod = null;
      this.tracks = [];
    }
}

class Creator {
    id: number;
    name: string;
    tracklist: string;
    type: string;
};