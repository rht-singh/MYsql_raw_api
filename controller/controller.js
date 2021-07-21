const db = require("../database/configuration");


class Category_items{

    async add_category_item(req,res){
        try{

            let data = req.body;

            let sql = " INSERT INTO category  set ? "

            let query = await db.query(sql ,data , (err,result)=>{
                if(err) throw err;
                console.log(query.values)
                res.json({
                    status:"sucess",
                    createdData:query.values
                })
            } )
        }
        catch(err){
            console.log(err);
             res.json({
                status:"fail",
                Error:err
            })
        }
    }

    async delete_category(req,res){
        try{

            let {id} = req.query;
            let sql = ` DELETE FROM category where id=${id}`;
            let query = await db.query(sql , (err,result)=>{
                if(err) throw err;
                res.json({
                    status:"success",
                    Deleted_Data:query.values
                })
            })

        }

        catch(err){
           res.json({
                status:"fail",
                Error:err
            })
        }
    }

    async update_category(req,res){
        try{
            let data = "gen";
            let {id} = req.query;

            let sql=`UPDATE category SET category_name=${data} where id = ${id}`;
            let query = await db.query(sql,(err,result)=>{
                if(err) throw err;
                 res.json({
                    status:"success",
                    Update_Result:query.values
                })
            })

        }
        catch(err){
            await res.json({
                status:"fail",
                Error:err
            })
        }
    }

}


module.exports = new Category_items();