import {StatusCodes  } from 'http-status-codes';

import userService from '../services/user.service.js';


const STATUS = {
    success: "OK",
    failure: "NO",
  };

const addUser =(req, res) => {
    const { body: user } = req;
  
    const addedUser = userService.addUser(user);
  
    if (!user.name) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        status: STATUS.failure,
        message: "Name is required",
      });
    } else {
      return res.status(StatusCodes.CREATED).send({
        status: STATUS.success,
        user: addedUser,
      });
    }
  }

const getAllUsers =(req, res) => {
    const users = userService.getAllUsers();
  if(users.length){
    return res.status(StatusCodes.OK).send(users)
  }
      
  return res.status(StatusCodes.NOT_FOUND).send({
    status: STATUS.failure,
    message: "No user",}
  )
    }

const getUser = (req, res) => {
    const id = parseInt(req.params.id,10)
    const user = userService.getUser(id);
    if(user){
      return res.status(StatusCodes.OK).send({
        status: STATUS.success,
        user, 
      })
    }
  
  return res.status(StatusCodes.NOT_FOUND).send({
    status: STATUS.failure,
    message: "No users found",}
  )
    }

const updateUser = (req, res) => {
    const { body: user } = req;
    const id = parseInt(req.params.id,10)
  
    const updatedUser = userService.updateUser(id ,user);
  
    if (updatedUser) {
        return res.status(StatusCodes.OK).send({
          status: STATUS.success,
          message: updatedUser,
        });
    } else {
      return res.status(StatusCodes.NOT_FOUND).send({
          status: STATUS.failure,
          message: "User not found",
        });
    }
  }

  const removeUser=(req,res)=>{
    const { params } = req;
    const id = parseInt(params.id,10)
  const status = userService.removeUser(id)
  let response;
  if (status){
    response={
      status: STATUS.success,
      message: `User has been deleted`,
    }
  
    }else{
      response={
        status: STATUS.failure,
        message: `User has not been deleted`,
      }
    }
  
    return res.status(StatusCodes.OK).send(response)
  }
  export default  {
    getUser,
    getAllUsers,
    addUser,
    updateUser,
    removeUser
  }