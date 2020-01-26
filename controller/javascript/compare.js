const express = require('express');
const fs = require('fs');


var router = express.Router();

router.post("/",(req, res) => {
   let answer= req.body.answer;
   console.log(answer);
   eval(answer);
   let result=false;
   if(compare(1,4)==-1){
        if(compare(3,3)==0){
            if(compare(5,2)==1){
                result=true;
            }
        }
    }
    res.json({result:result});
  }).get("/", function (req, res) {
      console.log("Hello");
    fs.readFile('./controller/Source/compare.js',"utf8",(err,data)=>{
        res.json({question:data});
    })
    // let compareJS;
    // let code ="let a,b; compareJS=(a,b)=>{if (a<b) return -1; if(a==b) return 0; if(a>b) return 1;}"
    // eval(code);
    // if(compareJS(1,4)==-1){
    //     if(compareJS(3,3)==0){
    //         if(compareJS(5,2)==1){
    //             console.log("Dung roi");
    //         }
    //     }
    // }
  });
  module.exports = router;

