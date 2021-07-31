import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { SpotifyItem } from '../../lib/network/services/spotify';
import { Locales, t } from '../../utils/i18n';

const Track: React.FC<{ ranking: number; track: SpotifyItem }> = ({
  track
}) => (
  <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
    <Text as="span" color="gray.700" marginRight="2">
      {track.track_number}
    </Text>
    <Link href={track.preview_url} passHref>
      <Heading as="a" fontSize="xl" target="_blank" rel="noopener noreferrer">
        {track.name}
      </Heading>
    </Link>

    <Text fontSize="md" color="gray.500">
      {track.album.name}
    </Text>
  </Box>
);

export const TopTracks: React.FC<{ tracks: SpotifyItem[] }> = ({ tracks }) => {
  const { locale } = useRouter();
  const today = new Date();

  return (
    <>
      <Heading marginBottom="3" as="h1">
        {t('Top tracks', Locales[locale])}{' '}
        {today.toLocaleString(Locales[locale], { month: 'long' })}
      </Heading>
      <SimpleGrid gap="5" columns={[1, 1]}>
        {tracks.map((track, index) => (
          <Track key={track.uri} ranking={index + 1} track={track} />
        ))}
      </SimpleGrid>
    </>
  );
};
