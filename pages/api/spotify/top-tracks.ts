import { NextApiRequest, NextApiResponse } from 'next';
import { SpotifyRepository } from '../../../lib/network/services';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const spotifyRepo = new SpotifyRepository();
      const response = await spotifyRepo.getTopTracks();

      res.setHeader(
        'Cache-Control',
        'public, s-maxage=7200, stale-while-revalidate=3600'
      );

      return res.status(200).json(response.data || { items: [] });
    } catch (error) {
      console.error(error);
      return res.status(200).json({ items: [] });
    }
  }

  return res
    .status(404)
    .json({ success: false, message: `METHOD ${req.method} NOT SUPPORTED` });
}
