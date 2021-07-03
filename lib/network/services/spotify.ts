import { AxiosInstance, AxiosResponse } from "axios";
import querystring from "querystring";
import ApiRepository, { axios } from "../network";

export type SpotifyContext = {
  external_urls: {
    spotify: string;
  };
  href: string;
  type: string;
  uri: string;
};

export interface AccessTokenResponse {
  access_token: string;
  expires_in: number;
  scope: string;
  token_type: "Bearer";
}

export type SpotifyImage = {
  height: number;
  url: string;
  width: number;
};

export interface SpotifyItem extends SpotifyContext {
  album: {
    album_type: string;
    external_urls: {
      spotify: string;
    };
    images: SpotifyImage[];
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  };
  artists: SpotifyArtist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    isrc: string;
  };
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
}

export interface SpotifyArtist extends SpotifyContext {
  name: string;
}

export interface CurrentlyPlayingResponse {
  context: SpotifyContext;
  timestamp: number;
  progress_ms: number;
  is_playing: boolean;
  currently_playing_type: string;
  item: SpotifyItem;
}

export enum SpotifyTrackTypes {
  artists = "artists",
  tracks = "tracks",
}

export class SpotifyRepository {
  public spotifyRepo: AxiosInstance;

  protected NOW_PLAYING_ENDPOINT = "/me/player/currently-playing";
  protected TOP_TRACKS_ENDPOINT = "/me/top/tracks";
  protected TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

  protected basicAuth: string;

  constructor() {
    this.basicAuth = this._basicAuth();

    this.spotifyRepo = ApiRepository({
      baseURL: process.env.NEXT_PUBLIC_SPOTIFY_API_URL,
    });
  }

  private async _getAccessToken(): Promise<AxiosResponse<AccessTokenResponse>> {
    return await axios.post(
      this.TOKEN_ENDPOINT,
      querystring.stringify({
        grant_type: "refresh_token",
        refresh_token: process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN,
      }),
      {
        headers: {
          Authorization: `Basic ${this.basicAuth}`,
        },
      }
    );
  }

  async getNowPlaying(): Promise<AxiosResponse<CurrentlyPlayingResponse>> {
    const { data } = await this._getAccessToken();

    return await this.spotifyRepo.get(this.NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${data.access_token}`,
      },
    });
  }

  async getTopTracks(type: SpotifyTrackTypes = SpotifyTrackTypes.tracks) {
    const { data } = await this._getAccessToken();

    return await this.spotifyRepo.get(`${this.TOP_TRACKS_ENDPOINT}/${type}`, {
      headers: {
        Authorization: `Bearer ${data.access_token}`,
      },
    });
  }

  private _basicAuth(): string {
    return Buffer.from(
      `${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`
    ).toString("base64");
  }
}
