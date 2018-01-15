var app = require("express")();
var nodemailer = require('nodemailer');
var bodyParser = require("body-parser");
const path = require('path');
app.set('view engine','ejs');
app.use(bodyParser());

app.set('views',path.join(__dirname,'views'));
app.get("/abc",function(req,res){
	res.render("abc.ejs");
})

app.post("/search",function(req,res){
	var email = req.body.userEmail;
	var pass = req.body.userPassword;
	var friend = req.body.friendEmail;
	var subj = req.body.heading;
	var body = req.body.body;
	var datas = {};
	 datas.a = body;
	 datas.b = subj;
	res.render("get",datas)
	/*var transporter = nodemailer.createTransport({
	  service: 'gmail',
	  auth: {
	    user: email,
	    pass: pass
	  }
	});

	var mailOptions = {
	  from: email,
	  to: friend,
	  subject: subj,
	  text: body
	};
	transporter.sendMail(mailOptions,function(err,info){
		if(err){
			console.log(err)
		}else{
			console.log("success")
			var datas = {"data":body,"data2":subj};
			res.sendfile("hi.ejs",datas);
		}
	})*/

})


app.listen(8080,(err)=>{
	if(!err){
		console.log("server up!!!!")
	}
})