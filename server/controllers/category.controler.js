const {Category}=require("../modules/database")

module.exports = {
    getAllcategory: async (req, res) => {
      try{
        const category= await Category.findAll()
        res.json(category)
      }catch(error){
       console.log("err",error);
       
      }
    },
  
    addcategory: async (req, res) => {
       const {CategoryName}=req.body
      try{
       
       const newcategory= await Category.create({CategoryName})
       res.status(201).send({
         success: "category is created succefully",
         category: newcategory,
       });
       
      }catch (error) {
   console.log("err",error);
   
     }
    }


}
  