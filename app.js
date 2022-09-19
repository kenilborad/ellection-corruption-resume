
require('dotenv').config();


const express = require("express");
const ejs = require("ejs");
const app = express();
const mongoose  = require("mongoose");




const DeleteRouter = require('./routes/Delete')
const UpdateRouter = require('./routes/Update');
const ReportsRouter = require('./routes/Reports')
const ComposeRouter = require('./routes/Compose')
const ReportRouter = require('./routes/Report')
const LatestRouter = require('./routes/Latest');
const HomeRouter = require('./routes/Home');

 
app.use(DeleteRouter);
app.use(UpdateRouter);
app.use(ReportsRouter);
app.use(ComposeRouter);
app.use(ReportRouter);
app.use(LatestRouter);
app.use(HomeRouter);


app.set('view engine', 'ejs');



app.use(express.static("public"));



   mongoose.connect('mongodb://localhost:27017/ElectionCorruption').then(() => console.log('Now connected to MongoDB!'))
   .catch(err => console.error('Something went wrong', err));





app.listen(process.env.PORT || 3000 , ()=>   {
  console.log("Server started on port 3000");
});

