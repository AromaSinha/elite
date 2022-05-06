const express=require("express");
const route2=express.Router();
const controller=require('../controller/services');
const axios=require('axios')



route2.get('/admin/services',(req,res) => {
        
    axios.get('http://localhost:4000/api/services')
    .then(function(response){
        console.log(response)
        //res.send(response.data)
        res.render('service-dashboard',{services:response.data});

    })
    .catch(err=>{res.send(err);
    })

})

route2.get('/services',(req,res) => {
    axios.get('http://localhost:4000/api/services',{params:{id:req.query.id}})
    .then(function(userdata){
        console.log(userdata)
        res.render("services",{service:userdata.data})
    })
    .catch(err=>{
        res.send(err)
    })
})

route2.get('/admin/salon_view',(req,res) => {
   
    axios.get('http://localhost:4000/api/services',{params:{id:req.query.id}})
    .then(function(userdata){
        console.log(userdata)
        res.render("salon_view",{service:userdata.data})
    })
    .catch(err=>{
        res.send(err)
    })
 
})

route2.post('/admin/salon_view',(req,res) => {
   
    axios.get('http://localhost:4000/api/services',{params:{id:req.query.id}})
    .then(function(userdata){
        console.log(userdata)
        res.render("salon_view",{service:userdata.data})
    })
    .catch(err=>{
        res.send(err)
    })
 
})

route2.get('/blog',(req,res) => {
    axios.get('http://localhost:4000/api/services')
    .then(function(response){
        console.log(response)
        res.render('blog',{services:response.data});

    })
    .catch(err=>{res.send(err);
    })
})

route2.get('/addservice',(req,res) => {
   
    res.render('addservice');

})
route2.post('/admin/services',(req,res) => {
        
    axios.get('http://localhost:4000/api/services')
    .then(function(response){
        console.log(response)
        //res.send(response.data)
        res.render('service-dashboard',{services:response.data});

    })
    .catch(err=>{res.send(err);
    })

})
route2.get('/admin/categories',(req,res)=>{
    axios.get('http://localhost:4000/api/services',{params:{id:req.query.id}})
    .then(function(userdata){
        console.log(userdata)
        res.render("categories",{service:userdata.data})
    })
    .catch(err=>{
        res.send(err)
    })
})

route2.get('/admin/edit',(req,res)=>{
    axios.get('http://localhost:4000/api/services',{params:{id:req.query.id}})
    .then(function(userdata){
        console.log(userdata)
        res.render("edit",{service:userdata.data})
    })
    .catch(err=>{
        res.send(err)
    }) 
})

route2.get('/api/services',controller.find);
route2.post('/api/services',controller.create);
route2.put('/api/services/:id',controller.update);
route2.delete('/api/services/:id',controller.delete);
module.exports=route2