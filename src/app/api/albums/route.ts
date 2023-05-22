export const getArtist = async (username: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${username}`,
    { cache: 'no-cache' }
  );
  return res.json();
};

export const getArtistAlbums = async (username: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${username}`,
    { cache: 'no-cache' }
  );
  await Promise.all([
    new Promise((res) => {
      setTimeout(() => res(null), 2000);
    }),
  ]);
  return res.json();
};
