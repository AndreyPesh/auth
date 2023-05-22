import { getArtist, getArtistAlbums } from '@/app/api/albums/route';
import Albums from '@/ui/Albums';
import { Suspense } from 'react';

interface ParamsAlbumPage {
  params: { username: string };
}

const Album = async ({ params }: ParamsAlbumPage) => {
  const userData = getArtist(params.username);
  const albumData = getArtistAlbums(params.username);

  const user = await userData;

  return (
    <div>
      <h1 className="text-red-500">User {user.id}</h1>
      <Suspense fallback={<div>Loading album...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <Albums promise={albumData} />
      </Suspense>
    </div>
  );
};

export default Album;
