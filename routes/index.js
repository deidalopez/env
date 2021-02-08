const { Router } = require('express');
const { addName } = require('../model/names.models');

const router = Router(); 

router.post('/name', async  (req, res) => {
  // we will get the name from the body since its the post/extract name from the body
  const name = req.body.name; 
  const  result =  await addName(name); 
  res.status(200).json({message: result});
});