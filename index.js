//console.log('this is working!')

let express = require('express');
let app = express();

// 在数据返还时，只解析parses Content-Type header 符合的 type option; 让他理解req.body的数据
// body = 储存json file的string主体
// let bodyParser = require('body-parser');
// app.use(bodyParser.json());

// // create array
let HappyTracker =[];

//public folder
app.use('/',express.static('public'));

// 1 add route, listening for a post request 听到信息时开始收集
app.post('/happyInput',(req,res)=>{
    console.log(req.body);
    let currentDate = Date();
    let obj_post = {
        date : currentDate,
        Happy : req.body.number
    }

    //把数据(obj)装进array(coffeeTracker)
    HappyTracker.push(obj_post);
    console.log(HappyTracker);

    res.json({task:"success"});
})


app.listen(4000,()=>{
    console.log("localhost:4000")
})

// // add route get information
// app.get('/getAirQuality',(req,res)=>{
//     let obj = { data : airTracker };
//     res.json(obj);
// })
