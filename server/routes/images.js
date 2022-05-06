// const express=require("express");
// const route4=express.Router();
// const fs = require('fs');
// const path = require('path');
// const Servicedb = require('../model/services');
// const multer = require('multer');
  
// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// });
  
// var upload = multer({ storage: storage });

// route4.get('/blog',(req,res)=>{
   
//     Servicedb.find({}, (err, items) => {
//         if (err) {
//             console.log(err);
//             res.status(500).send('An error occurred', err);
//         }
//         else {
//             res.render('blog', { items: items });
//         }
//     });
  
// })

// route4.post('/addservice', upload.single('image'), (req, res, next) => {
  
//     var obj = {
        
//         image: {
//             data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
//             contentType: 'image/png'
//         }
//     }
//     Servicedb.create(obj, (err, item) => {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             // item.save();
//             res.redirect('/admin/services');
//         }
//     });
// });
// module.exports=route4
