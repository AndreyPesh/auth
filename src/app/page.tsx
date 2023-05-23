import { connectDB } from '@/utils/database';
import { getPosts } from './api/posts/route';

export default async function Home() {

  // const data: Array<{ title: string }> = await getPosts();
  // await connectDB()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home page
      {/* {data.map((user) => (
        <h2>{user.title}</h2>
      ))} */}
    </main>
  );
}
