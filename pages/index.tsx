import { Divider } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { Home } from '../components/Home/';
import { NowPlaying, TopTracks } from '../components/Spotify';
import { absoluteUrl } from '../lib/network/network';
import {
  CurrentlyPlayingResponse,
  SpotifyItem
} from '../lib/network/services/spotify';

interface IndexPageProps {
  song: CurrentlyPlayingResponse;
  tracks: SpotifyItem[];
}

const IndexPage: React.FC<IndexPageProps> = ({ song, tracks }) => (
  <>
    <Home />
    <NowPlaying song={song} />
    <Divider my="3" />
    <TopTracks tracks={tracks} />
  </>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apiUrl = absoluteUrl(context.req).origin;

  const nowPlayingResponse = await fetch(`${apiUrl}/api/spotify/now-playing`);

  const song = await nowPlayingResponse.json();

  const topTracksResponse = await fetch(`${apiUrl}/api/spotify/top-tracks`);
  const tracks = await topTracksResponse.json();

  return {
    props: {
      song,
      tracks: tracks.items || []
    }
  };
};
export default IndexPage;
