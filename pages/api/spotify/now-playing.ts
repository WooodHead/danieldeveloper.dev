import { NextApiRequest, NextApiResponse } from 'next';
import { handleAxiosError } from '../../../lib/network/network';
import { SpotifyRepository } from '../../../lib/network/services';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const spotifyRepo = new SpotifyRepository();
      const response = await spotifyRepo.getNowPlaying();

      res.setHeader(
        'Cache-Control',
        'public, s-maxage=60, stale-while-revalidate=30'
      );

      return res.status(200).json(response.data || { is_playing: false });
    } catch (error) {
      return res.status(200).json({ is_playing: false });
    }
  }

  return res
    .status(404)
    .json({ success: false, message: `METHOD ${req.method} NOT SUPPORTED` });
}
