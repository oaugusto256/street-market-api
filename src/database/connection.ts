import mongoose from "mongoose";

const mongoURI = process.env.MONGO_URI;

export default mongoose.connect(mongoURI as string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
