const db=require('../config/database');
const users=require('../models/userModel');
const feedback=require('../models/feedbackModel');
async function dashboard(req,res){const [[u]]=await db.execute("SELECT COUNT(*) AS count FROM users WHERE role='user'");const [[c]]=await db.execute('SELECT COUNT(*) AS count FROM awareness_content');const [[q]]=await db.execute('SELECT COUNT(*) AS count FROM quiz_questions');const [[f]]=await db.execute('SELECT COUNT(*) AS count FROM feedback');res.json({success:true,data:{users:u.count,content:c.count,questions:q.count,feedback:f.count}});}
async function listUsers(req,res){res.json({success:true,data:await users.all()});}
async function listFeedback(req,res){res.json({success:true,data:await feedback.all()});}
module.exports={dashboard,listUsers,listFeedback};
