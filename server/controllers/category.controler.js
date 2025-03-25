const {Category}=require("../modules/database")

module.exports = {
    getAllcategory: async (req, res) => {
      try{
        const category= await Category.findAll()
        res.json(category)
      }catch(error){
   res.status(500).json(error)
   
      
       
      }
    },
  
    addcategory: async (req, res) => {
       const body=req.body
      try{
       
       const newcategory= await Category.create(body)
       res.status(201).send({
         success: "category is created succefully",
         category: newcategory,
       });
       
      }catch (error) {
      
   res.status(500).json(error)
     }
    }

  };



  