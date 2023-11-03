const Model = require("../Model/Model");

exports.GetUsers= (req, res)=>{
   Model.getUsers((err, data)=>{
      if(err)
      res.json({Message : err});
      else
      res.json({Message : "Fetched", Response : data});
   });
}

exports.SaveUser = (req, res)=>{
   let obj = new Model(req.body);

   Model.saveUser(obj , (err, data)=>{
      if(err)
      req.json({Message : err});
      else
      res.json({Message : "Saved", Response:data});
   });
}

exports.DelUser = (req, res)=>{
   
   Model.delUser(req.params.id, (err, data)=>{
      if(err)
      res.json({Message:err});
      else
      res.json({Message:"Deleted", Response :data});
   });
}