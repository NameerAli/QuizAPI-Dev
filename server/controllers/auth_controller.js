//auth controller contains functions that are used by the route : "/auth"

import mongoose from "mongoose";
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import createError from "http-errors";
import jwt from "jsonwebtoken";

//Register Function
export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({ ...req.body, password: hash })
        await newUser.save();
        res.status(200).send("User has been created!")
    }
    catch (err) {
        return next(err)

    }
}



////Login Function
export const login = async (req, res, next) => {
    try {
        //Checking User through its username if he/she really exist in the database
        const user = await User.findOne({ username: req.body.username })
        if (!user) return next(createError(404, "User not found!"))

        //If the User exist,checking if the password is right or wrong 
        const isCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isCorrect) return next(createError(400, "Wrong Passowrd!"));

        const token = jwt.sign({ id: user._id }, "f76g8dasdhu");
        const {password, ...others} = user._doc;
        res.cookie("access_token", token, {
            httpOnly: true,
        })
            .status(200)
            .json(others);

    }
    catch (err) {
        return next(err);

    }
}