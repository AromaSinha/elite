const express=require("express");
const route=express.Router();
const User=require('../model/user')
const passport=require("passport")
const bcrypt=require("bcrypt")
const axios=require("axios")
const localStrategy=require('passport-local').Strategy
//passport
route.use(passport.initialize());
route.use(passport.session());

passport.serializeUser(function (user,done){
    done(null,user.id);
})
passport.deserializeUser(function (id,done){
    User.findById(id,function (err,user){
        done(err,user);
    })
})

passport.use(new localStrategy(function (username,password,done){
    User.findOne({
        username:username
    },function (err,user){
        if(err){
            return done(err);
        }
        if(!user){
            return done(null,false,{
                message:"incorrect username"
            })};
            bcrypt.compare(password,user.password,function(err,res){
                if(err){
                    return done(err)
                        };
                    if(res===false){
                        return done(null,false,{message:"incorrect password"})};
                        return done(null,user);  
                
            });
        
    });
}));
// Setup our admin user
route.get('/setup', async (req, res) => {
	const exists = await User.exists({ username: "admin" });

	if (exists) {
		res.redirect('/admin-login');
		return;
	};

	bcrypt.genSalt(10, function (err, salt) {
		if (err) return next(err);
		bcrypt.hash("pass", salt, function (err, hash) {
			if (err) return next(err);
			
			const newAdmin = new User({
				username: "admin",
				password: hash
			});

			newAdmin.save();

			res.redirect('/admin-login');
		});
	});
});




route.get('/',(req,res)=>{
    axios.get('http://localhost:4000/api/services')
    .then(function(response){
        console.log(response)
        //res.send(response.data)
        res.render('index',{services:response.data});

    })
    .catch(err=>{res.send(err);
    })
    //res.render('index');
})

route.get('/quote',(req,res) => {
    res.render('quote');
})
route.get('/admin/users',isLoggedIn,(req,res)=>{
    
    res.render('admin-dashboard');
})

route.get('/admin-login',isLoggedOut,(req,res)=>{
    const response={
        error:req.query.error
    }
    res.render('admin-login',response);
})


route.get('/logout',function(req,res){
    req.logout();
    res.redirect('/');
})

route.post('/admin-login',passport.authenticate('local',{
    successRedirect:'/admin/services',
    failureRedirect:'/admin-login?error=true'
}));

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/admin-login')
}

function isLoggedOut(req,res,next){
    if(!req.isAuthenticated()){
        return next();
    }
    res.redirect('/admin/services')
}




module.exports=route
