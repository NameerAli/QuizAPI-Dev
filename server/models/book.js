import mongoose from "mongoose"


const bookSchema = new mongoose.Schema({
    booktitle: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
      
    },
    isbn: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: String
      
    },
  });

export default mongoose.model("Book",bookSchema);