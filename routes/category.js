var express=require('express');
var pool = require('./pool');
var upload = require('./multer');
var router = express.Router()

// var express = require('express')
// var router = express.Router();
// var pool = require("./pool")
// var upload = require('./multer')
 
 router.post('/categorysubmit',upload.single('icon'),function(req,res,next){
    try{
          pool.query("insert into category(categoryname,status,icon) values(?,?,?)",[req.body.category,req.body.status,req.file.filename], function(error,result){
            if (error)
            { 
               return res.status(200).json({status:false,message:'server error..'})
             }
            
            
            else
            {   console.log(result)
                return res.status(200).json({status:true,message:'submit'})
            }
        })
    }
    catch(e)
    {
        return res.status(200).json({status:false,message:'error in website pls contact'})
    }
});

router.get('/category_list',function(req,res,next){
    try{
        pool.query("select * from category",function(error,result){
            if(error)
            {
                return res.status(200).json({status:false,data:[]})
            }
            else{
                return res.status(200).json({status:true,data:result})
            }
        })
    }
    catch(e)
    {
        return res.status(200).json({status:false,data:[]})
    }
});
router.post('/category_edit',function(req,res,next){
    try{
          pool.query("update category set categoryname=?,status=? where categoryid=?",[req.body.categoryname,req.body.status,req.body.categoryid],function(error,result){
            if (error)
            { 
               return res.status(200).json({status:false,message:'server error..'})
             }
            
            
            else
            {   console.log(result)
                return res.status(200).json({status:true,message:'editing suceesfully'})
            }
        })
    }
    catch(e)
    {
        return res.status(200).json({status:false,message:'error in website pls contact'})
    }
});

router.post('/category_edit_icon',upload.single('icon'),function(req,res,next){
    try{
          pool.query("update category set icon=? where categoryid=?",[req.file.filename,req.body.categoryid], function(error,result){
            if(error)
            { 
               return res.status(200).json({status:false,message:'server error..'})
             } 
            else
            {   console.log(result)
                return res.status(200).json({status:true,message:'icon edit sucessful'})
            }
        })
    }
    catch(e)
    {
        return res.status(200).json({status:false,message:'error in website pls contact'})
    }
});


router.post('/category_delete',function(req,res,next){
    try{
          pool.query("delete from category where categoryid=?",[req.body.categoryid], function(error,result){
            if(error)
            { 
               return res.status(200).json({status:false,message:'server error..'})
             } 
            else
            {   console.log(result)
                return res.status(200).json({status:true,message:'category delete sucessful'})
            }
        })
    }
    catch(e)
    {
        return res.status(200).json({status:false,message:'error in website pls contact'})
    }
});



// var express = require('express')
// var router = express.Router();
// var pool = require("./pool")
// var upload = require('./multer')
// Get Home page
// router.post('/categorysubmit', upload.single('icon'), function (req, res, next) {
//     try {
//         pool.query("insert into category(categoryname,status,icon) values(?,?,?)", [req.body.categoryname, req.body.status, req.file.filename], function (error, result) {
            // if (error) {
            //     console.log(error)
            //     return res.status(200).json({ status: false, message: 'sever error' })
            // }
            
//         })
//     }
//     catch (e) {
//         return res.status(200).json({ status: false, message: 'server not responding pls contact server administrator' })

//     }
// })
// router.get('/category_list', function(req, res, next) {
//     try{
//       pool.query("select * from category",function(error,result){
//         if(error)
//         {
//            return res.status(200).json({status:false,data:[]})  
//         }
//         else
//         {
//             return res.status(200).json({status:true,data:result})  
      
//         }
//      })
  
  
//     }
//     catch(e)
//     {
//       return res.status(200).json({status:false,data:[]})  
  
//     }
//   });
  
  router.post('/category_edit_data',function(req,res,next){
    try{
    pool.query("update category set categoryname=?,status=? where categoryid=?",[req.body.categoryname,req.body.status,req.body.categoryid],function(error,result){
    if(error)
    {
        console.log(error)
        return res.status(200).json({status:false,message:'server error(database)'}) 
    }
    else{
        return res.status(200).json({status:true,message:'Category Edit Successful'})
    }
    })
    }
    catch(e){
        return res.status(200).json({ status: false, message: 'server not responding pls contact server administrator' })
    
    }
    
    })


    router.post('/category_edit_icon',upload.single('icon'), function(req,res,next){
try{
    pool.query("update category set icon=? where categoryid=?",[req.file.filename,req.body.categoryid],function(error,result){
    if(error)
    {
        console.log(error)
        return res.status(200).json({status:false,messsge:'Server Error'})
    }
    else
    {
    return res.status(200).json({status:true,message:'Icon Update Successfully'})
    }
})
}
catch(e)
{
return res.status(200).json({status:false,message:'server not responding pls contact server administer '})
}

    })

router.post('/category_delete_data',function(req,res,next){
    try{
pool.query("delete from category where categoryid=?",[req.body.categoryid],function(error,result){
if(error)
{
return res.status(200).json({status:false,messge:'server error'})

}
else{
    return res.status(200).json({status:true,message:'Delete Category Successfuly'})
}

})
    }
    catch(e){
return res.status(200).json({status:false,messge:'server not respponding pls contact administer'})
    }
})
module.exports = router
    