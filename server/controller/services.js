const bodyParser = require("body-parser");
const Servicedb=require("../model/services")

exports.create=(req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Can't be empty"});
        return;
    }
    const service1=new Servicedb({
        title:req.body.title,
        description:req.body.description,
        categories:req.body.categories
        
    })
    //save in database
    service1.save(service1)
            .then(data=>{
                res.redirect('/admin/services')
            })
            .catch(err=>{
                res.status(500).send({
                    message:err.message||"error occured"
                })
            })
}


exports.find=(req,res)=>{
    if(req.query.id){
        const id=req.query.id;
        Servicedb.findById(id)
        .then(data=>{
            if(!data){
            res.status(404).send({message:"no user found"+id})
            }else{
                // console.log(data)
                res.send(data);
            }
            
        })
        .catch(err=>{
            res.status(500).send({message:"error "+id})
        })
    }else{
    Servicedb.find()
        .then(service1=>{
            res.send(service1)
        })
       
        .catch(err=>{
            res.status(500).send({
                message:err.message||"error occured find"
            })

        })
    }
    }
   
    exports.update=(req,res)=>{
        if(!req.body){
            return res
            .status(400)
            .send({message:"update cannot be empty"})
        }
        const id=req.params.id;
        Servicedb.findByIdAndUpdate(id,req.body)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"not found"})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:err.message||"error in updating"})
        })
       }
       
       //delete
       exports.delete=(req,res)=>{
           const id=req.params.id;
           Servicedb.findByIdAndDelete(id)
           .then(data=>{
               if(!data){
                   res.status(400).send({message:"cannot delete"})
               }else{
                   res.send({
                       message:"message deleted successfully"
                   })
               }
           })
           .catch(err=>{
               res.status(500).send({
                   message:err.message|| "can't delete"+id
               });
           });
       }
    


// module.exports={findService,createService};