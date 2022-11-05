//user controller contains functions that are used by the route : "/user"
import {createError} from "../middleware/error.js"
import User from "../models/user.js";

export const update = async (req,res,next) =>{
    if(req.params.id == req.user.id){
     try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{
            $set : req.body,
        },
        {new : true}
        );
       
        res.status(200).json(updatedUser);

     }
     catch(err){
        next(err);
     }
    }
    else{
        return next(createError(403, "You can update only your account!"));
    }
}



//Delete user 
export const deleteUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
      try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted.");
      } catch (err) {
        next(err);
      }
    } else {
      next(createError(403, "You can delete only your account!"));
    }
  };
  

//View User 
  export const getUser = async (req, res, next) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  };