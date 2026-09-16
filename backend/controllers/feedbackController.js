const feedback=require('../models/feedbackModel');
async function create(req,res){const {user_name,village,district,rating,message}=req.body;if(!user_name||!village||!district||!message||Number(rating)<1||Number(rating)>5)return res.status(400).json({success:false,message:'Please complete all feedback fields.'});await feedback.create({user_name,village,district,rating:Number(rating),message});res.status(201).json({success:true,message:'Thank you for your feedback.'});}
async function list(req,res){res.json({success:true,data:await feedback.all()});}
module.exports={create,list};
