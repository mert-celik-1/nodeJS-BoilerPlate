import mongoose from "mongoose";

const connectToDatabase = async (uri) => {
  console.log(uri)
  console.log(uri)

  console.log(uri)
  console.log(uri)
  console.log(uri)
  console.log(uri)

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB bağlantısı başarılı!');
  } catch (error) {
    console.error('MongoDB bağlantı hatası:', error);
  }
};


export default connectToDatabase
