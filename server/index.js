import express from "express"
import mongoose from "mongoose"
import userRoute from "./routes/users_route.js" 
import authRoute from "./routes/auth_route.js"
import bookRoute from "./routes/book_route.js" 
//import createError from "./middleware/error.js"
import cookieParser from "cookie-parser"


const app = express()

mongoose.connect('mongodb://localhost:27017', {
    dbName: 'esldb',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database connected!");
    },
    (error) => {
      console.log("Database can't be connected: " + error);
    }
  );

app.listen(4000,()=>{
    console.log("Connected!")
});

app.use(cookieParser());
app.use(express.json());
//allows node to use router imported above 
app.use("/auth",authRoute);
app.use("/user",userRoute);
app.use("/book",bookRoute);
//app.use(createError);
