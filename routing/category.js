const category = require('../controller/controller');
const router = require('express').Router();
const db = require('../database/connection');

router.get('/create_database',(req,res)=>{
try{

    let sql = " CREATE DATABASE BLOG ";
   db.query(sql , (err,result)=>{
        if(err){
            throw err;
        }
        else{
            console.log(result);
            res.json({
                status:"success",
                Database:"Database created"
            })
        }
    })

}
catch(err){
    console.log(err);
}
    

})


router.get('/createTable',async(req,res)=>{
    try{

    
    let sql = "CREATE TABLE category(id int AUTO_INCREMENT , category_name VARCHAR(255) , category_type VARCHAR(255), PRIMARY KEY(id) )";
    await db.query(sql , (err , result)=>{
        if(err) throw err;
        else{
          res.json({
                status:"success",
                Database:"Table created"
            })
        }
    })
}
catch(err){
    console.log(err);
   res.json({
        status:"fail",
        Error:err
    })
}
})


router.route('/add_category').post(category.add_category_item);
router.route('/delete_category').get(category.delete_category);
router.route('/update_category').get(category.update_category);

module.exports = router;