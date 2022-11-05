import Book from "../models/book.js";




//Search Book
export const getBook = async (req, res, next) => {
    try {
      const book = await Book.findById(req.params.id);
      //if(req.params.isbn == req.book.isbn){
      res.status(200).json(book);
    
    } catch (err) {
      next(err);
    }
  };






export const viewBooks = async (req, res, next) => {
    try {
      const book = await Book.find();
      res.status(200).json(book);
    } catch (err) {
      next(err);
    }
  };