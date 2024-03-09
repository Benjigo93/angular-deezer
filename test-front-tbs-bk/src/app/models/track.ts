export class Track {
    id: number;
    readable: boolean;
    title: string;
    title_short: string;
    title_version: string;
    link: string;
    duration: number;
    rank: number;
    explicit_lyrics: boolean;
    explicit_content_lyrics: boolean;
    explicit_content_cover: boolean;
    preview: string;
    md5_image: string;
    time_add: number;
    artist: Artist;
    album: Album;
    type: string;
}

class Artist {
    id: number;
    name: string;
    link: string;
    tracklist: string;
    type: string;
}

class Album {
    id: number;
    title: string;
    cover: string;
    cover_small: string;
    cover_medium: string;
    cover_big: string;
    cover_xl: string;
    md5_image: string;
    tracklist: string;
    type: string;
}