require('dotenv').config();
const express=require('express');const cors=require('cors');const path=require('path');
const app=express();app.use(cors({origin:process.env.CORS_ORIGIN||'*'}));app.use(express.json({limit:'1mb'}));
app.get('/api/health',(req,res)=>res.json({success:true,message:'Plastic awareness API is running.'}));
app.use('/api/users',require('./routes/userRoutes'));app.use('/api/content',require('./routes/contentRoutes'));app.use('/api/quiz',require('./routes/quizRoutes'));app.use('/api/feedback',require('./routes/feedbackRoutes'));app.use('/api/admin',require('./routes/adminRoutes'));
app.use(express.static(path.join(__dirname,'..','frontend')));app.use((err,req,res,next)=>{console.error(err);res.status(500).json({success:false,message:'Something went wrong.'});});
const port=process.env.PORT||5000;app.listen(port,()=>console.log(`Plastic awareness server listening on port ${port}`));
