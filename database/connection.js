const db = require('./configuration');

db.connect((err)=>{
    try{
        if(err) throw err;
        else{
            console.log('MySql Connected')
        }
    }
    catch(err){
        console.log(err);
    }
})

module.exports = db;