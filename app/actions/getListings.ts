import prisma from '@/app/libs/prismadb';

export default async function getListings() {
  try {
    const listings = await prisma.listing.findMany({
      orderBy: {
        createAt: 'desc',
      },
    });
    return listings;
  } catch (error: unknown) {
    throw new Error(error as string);
  }
}
