const dbConn = require("../../DatabaseConnection/dbConnection");

let Contact = function(model)
{
   this.UserId = model.UserId;
   this.Name = model.Name;
   this.MobileNo = model.MobileNo;
   this.Address = model.Address;
   this.Subject = model.Subject;
   this.Message = model.Message;
}


Contact.getUsers = (result)=>{
   dbConn.query("select * from contactus", (err, res)=>{
      if(err)
      result(err, null);
      else
      result(null, res);
   });

}

Contact.saveUser =(obj, result)=>
{
      dbConn.query("insert into contactus(Name, MobileNo, Address, Subject, Message) values (?,?,?,?,?)", 
      [obj.Name, obj.MobileNo, obj.Address, obj.Subject, obj.Message], (err, res)=>{
         if(err)
         result(err, null);
         else
         result(null,res);
      });
     
}

Contact.delUser = (id,result)=>{
   dbConn.query('delete from contactus where UserId=?', id, (err, res)=>{
      if(err)
      result(err, null);
      else
      result(null,res);
   });
}

module.exports = Contact;