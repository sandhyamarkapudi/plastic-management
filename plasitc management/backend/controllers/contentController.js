const content = require('../models/contentModel');
const valid = item => item.title && item.description && item.category;
async function list(req,res) { res.json({success:true,data:await content.all(req.query.language)}); }
async function get(req,res) { const item=await content.find(req.params.id); if(!item) return res.status(404).json({success:false,message:'Content not found.'}); res.json({success:true,data:item}); }
async function create(req,res) { if(!valid(req.body)) return res.status(400).json({success:false,message:'Title, description and category are required.'}); res.status(201).json({success:true,data:await content.create(req.body)}); }
async function update(req,res) { if(!valid(req.body)) return res.status(400).json({success:false,message:'Title, description and category are required.'}); const item=await content.update(req.params.id,req.body); if(!item) return res.status(404).json({success:false,message:'Content not found.'}); res.json({success:true,data:item}); }
async function remove(req,res) { const count=await content.remove(req.params.id); if(!count) return res.status(404).json({success:false,message:'Content not found.'}); res.json({success:true,message:'Content deleted.'}); }
module.exports = { list, get, create, update, remove };
