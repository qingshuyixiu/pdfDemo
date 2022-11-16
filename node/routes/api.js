const express=require("express");
const apiRouter=express.Router();
const getPdf=require('./api/getPdf');
apiRouter.get('/getPdf',getPdf);
module.exports=apiRouter;