import { GetServerSideProps } from 'next';
import { Home } from '../components/Home/';
import { NowPlaying } from '../components/Spotify';
import { absoluteUrl } from '../lib/network/network';
import { CurrentlyPlayingResponse } from '../lib/network/services/spotify';

interface IndexPageProps {
  song: CurrentlyPlayingResponse;
}

const IndexPage: React.FC<IndexPageProps> = ({ song }) => (
  <>
    <Home />
    <NowPlaying song={song} />
  </>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(
    `${absoluteUrl(context.req).origin}/api/spotify/now-playing`
  );

  const song = await response.json();

  return {
    props: {
      song
    }
  };
};
export default IndexPage;
