const db = require("../models");
const Stream = db.stream;
const User =db.user;
allStreams=(req,res)=>{
    Stream.findAll().then((streams)=>{
        res.status(200).send(streams);
    })
};

module.exports=allStreams;