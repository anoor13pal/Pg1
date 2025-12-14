const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
app.use(express.json());

const couponsPath = path.join(__dirname, "data", "coupons.json");
const sitePath = path.join(__dirname, "data", "site.json");

const readJSON = f => JSON.parse(fs.readFileSync(f,"utf8"));
const writeJSON = (f,d) => fs.writeFileSync(f,JSON.stringify(d,null,2));

app.get("/",(_,res)=>res.send("Profit Grocery Backend is running"));

app.post("/api/redeem",(req,res)=>{
 const {code}=req.body;
 const coupons=readJSON(couponsPath);
 const c=coupons.find(x=>x.code===code && x.active);
 if(!c) return res.json({success:false});
 res.json({success:true,gift:c.gift,redirectUrl:c.redirectUrl});
});

app.get("/api/admin/coupons",(req,res)=>res.json(readJSON(couponsPath)));
app.post("/api/admin/coupons",(req,res)=>{writeJSON(couponsPath,req.body);res.json({success:true})});

app.get("/api/admin/site",(req,res)=>res.json(readJSON(sitePath)));
app.post("/api/admin/site",(req,res)=>{writeJSON(sitePath,req.body);res.json({success:true})});

app.listen(10000,()=>console.log("Server running"));