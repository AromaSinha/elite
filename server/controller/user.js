// var User=require('../model/user');

// //create
// exports.create=(req,res)=>{
//     if(!req.body){
//         res.status(400).send({message:"Can't be empty"});
//         return;
//     }
//     const users1=new User({
//         email:req.body.email,
//         password:req.body.password
//     })
//     //save in database
//     users1.save(users1)
//             .then(data=>{
//                 res.send(data)
//             })
//             .catch(err=>{
//                 res.status(500).send({
//                     message:err.message||"error occured"
//                 })
//             })
// }

// //return all users
// exports.find=(req,res)=>{
//     User.find()
//     .then(users1=>{
//         res.send(users1)
//     })
//     .catch(err=>{
//         res.status(500).send({
//             message:err.message||"error occured find"
//         })
//     })
// }

// //update new user by user id
// exports.update=(req,res)=>{
//  if(!req.body){
//      return res
//      .status(400)
//      .send({message:"update cannot be empty"})
//  }
//  const id=req.params.id;
//  User.findByIdAndUpdate(id,req.body)
//  .then(data=>{
//      if(!data){
//          res.status(404).send({message:"not found"})
//      }else{
//          res.send(data)
//      }
//  })
//  .catch(err=>{
//      res.status(500).send({message:err.message||"error in updating"})
//  })
// }

// //delete
// exports.delete=(req,res)=>{
//     const id=req.params.id;
//     User.findByIdAndDelete(id)
//     .then(data=>{
//         if(!data){
//             res.status(400).send({message:"cannot delete"})
//         }else{
//             res.send({
//                 message:"message deleted successfully"
//             })
//         }
//     })
//     .catch(err=>{
//         res.status(500).send({
//             message:err.message|| "can't delete"+id
//         });
//     });
// }