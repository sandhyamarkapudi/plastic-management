const quiz=require('../models/quizModel');
async function list(req,res){res.json({success:true,data:await quiz.all()});}
async function submit(req,res){const answers=req.body.answers||{}; const questions=await quiz.allWithAnswers(); let score=0; questions.forEach(q=>{if(answers[q.id]===q.correct_answer) score++;}); const percentage=questions.length?Math.round(score/questions.length*100):0; await quiz.result({userId:req.user?.id,score,totalQuestions:questions.length,percentage}); res.json({success:true,data:{score,totalQuestions:questions.length,percentage,message:percentage>=80?'Excellent!':percentage>=50?'Good effort!':'Needs improvement. Keep learning!'}});}
async function create(req,res){if(!req.body.question||!req.body.option_a||!req.body.option_b||!req.body.option_c||!req.body.option_d||!['a','b','c','d'].includes(req.body.correct_answer)||!req.body.explanation)return res.status(400).json({success:false,message:'All question fields are required.'}); res.status(201).json({success:true,id:await quiz.create(req.body)});}
async function update(req,res){await quiz.update(req.params.id,req.body);res.json({success:true,message:'Question updated.'});}
async function remove(req,res){await quiz.remove(req.params.id);res.json({success:true,message:'Question deleted.'});}
module.exports={list,submit,create,update,remove};
