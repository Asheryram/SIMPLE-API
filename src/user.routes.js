import express from "express";
import { StatusCodes } from "http-status-codes";
import { expressYupMiddleware } from 'express-yup-middleware'


import userService from "./services/user.service.js";
import {addUser,updateUser,getUser,removeUser} from "./user.schemas.js";
import userContoller from "./controllers/user.contoller";

const router = express.Router();

const STATUS = {
  success: "OK",
  failure: "NO",
};

router.get("/all", userContoller.getAllUsers);

router.get("/:id", expressYupMiddleware({schemaValidator: getUser}),userContoller.getUser);

router.post("/", 
expressYupMiddleware({schemaValidator: addUser,expectedStatusCode:StatusCodes.BAD_REQUEST}),
userContoller.addUser
);

router.put("/:id", 
expressYupMiddleware({schemaValidator: updateUser}),
userContoller.updateUser
);

router.delete('/:id',
expressYupMiddleware({schemaValidator: removeUser}),
userContoller.removeUser)


export default router;
