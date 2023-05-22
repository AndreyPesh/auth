const Albums = async ({ promise }: { promise: Promise<{ title: string }> }) => {
  const album = await promise;
  return (
    <div className="text-red-200">
      Album: <p>{album.title}</p>
    </div>
  );
};

export default Albums;
