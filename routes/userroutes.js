const express =require("express");
const {register,retriveall,updateone,deleteone,retriveone}=require("../controllers/userctrl");

const userroutes=express.Router();

//POST
userroutes.post('/register',register);

//GET
userroutes.get('/retriveall',retriveall);

//PUT
userroutes.put('/updateone/:id',updateone);

//DELETE
userroutes.delete('/deleteone/:id',deleteone);

//GET ONE
userroutes.get('/retriveone/:id',retriveone);


module.exports=userroutes;