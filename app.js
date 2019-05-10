let express = require("express");
let multer = require("multer");
let app  = express();
app.listen(8081);
let  cookieParser = require("cookie-parser");
let cookieSession = require("cookie-session")
let obj = multer({dest:"./public/upload"});
app.use(obj.any());
app.use(cookieParser("asdsdsddsdadsdsdsadsdsadsdada")); //签名加密
app.use(cookieSession({
    keys:["huhuhohbnoi","yugugiuhh89","tfyytufyugygu"],
    maxAge:20*60*1000
}));
app.get("/a",(req,res)=>{
    // console.log(req.cookies) //未签名的cookies
    // console.log(req.signedCookies) //签名的cookies
    // console.log(req.session)
    if (!req.session["view"]) {
        req.session["view"]=1
    } else {
        req.session["view"]++
    }
    res.cookie("amount",99.8,{
        // domain:"aaa.com",
       // path:"/",
        httpOnly:true, //只能有服务器操作
        secure:true, //是否的https http请求不认
        signed:true, //是否签名
        maxAge:14*85400*100
    })
    res.send(`欢迎你第${req.session["view"]}到访本站`);

})
//签名保护cookie 有密钥


