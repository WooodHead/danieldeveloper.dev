import { useEffect, useState } from 'react';
import { handleAxiosError } from '../../lib/network/network';
import { SpotifyRepository } from '../../lib/network/services';

export const NowPlaying: React.FC = () => {
  const spotifyRepo = new SpotifyRepository();
  const [nowPlaying, setNowPlaying] = useState<any>('');

  // useEffect(() => {
  //   try {
  //     const response = spotifyRepo.getNowPlaying();

  //     if (response.data) {
  //       setNowPlaying(response.data);
  //     }
  //   } catch (error) {
  //     console.log(handleAxiosError(error));
  //   }
  // }, []);

  return <div>now playing</div>;
};
