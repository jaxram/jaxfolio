const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
app.use(express.static(path.join(__dirname, 'public')));

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/main.html'));
  //__dirname : It will resolve to your project folder.
});
router.get('/snap',function(req,res){
  res.sendFile(path.join(__dirname+'/snaps.html'));

});
router.get('/project',function(req,res){
  res.sendFile(path.join(__dirname+'/project.html'));
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);
const host = '0.0.0.0';
const port = process.env.PORT || 3000;
app.listen(port, host, function() {
  console.log("Server started.......");
});