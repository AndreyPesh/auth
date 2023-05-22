import mongoose from 'mongoose';

let isConnect = false;

export const connectDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnect) {
    console.log('mongo is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      dbName: 'share_prompt',
      //@ts-ignore
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    isConnect = true;
    console.log('Mongo connected');
  } catch (error) {
    console.log('Error mongo connected');
  }
};
