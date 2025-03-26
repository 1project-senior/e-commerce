
const {Products}=require("../modules/database")

module.exports = {
getAllproducts:async (req,res) => {
    try {
        const products = await Products.findAll({
          
          });
          res.json(products)
    } catch (error) {
        res.status(500).send({ message: "Error geting products" })
    }
},

getOne: async (req, res) => {
    try {
        const  name  = req.params.name
        const oneproduct = await Products.findOne({
            where: { name:name },
          
        })
        
        if (!oneproduct) {
            return res.status(404).send({ message: "Product not found" })
        }
        
        res.json(oneproduct)
    } catch (error) {
        console.error("Error getting product:", error)
        res.status(500).send({ message: "Error getting product" })
    }
},

getByCtagory:async (req,res) => {
    try {
    const catname = req.params.name

    const products = await Products.findAll({
        where: { catname:catname },
       
    })
    res.json(products)
        
    } catch (error) {
        console.error("Error getingproducts by category:", error)
        res.status(500).send({ message: "Error geting products by category" })
    }
},

addProduct: async (req, res) => {
    try {
        
        const body=req.body
        const newproduct = await Products.create(body)
        
        res.json(newproduct)
    } catch (error) {
        console.error("Error adding product:", error)
        res.status(500).send({ message: "Error adding product" })
    }
},

deleteProduct:async (req,res) => {
    const {id}=req.params
    if(!id){
        return res.status(404).send({ message: "Product not found" })
    }
    try {
        const product = await Products.destroy({where:{id}})
        res.json(product)
    } catch (error) {
        console.error("Error deleting product:", error)
        res.status(500).send({ message: "Error deleting product" })
    }
},
updateProduct: async (req, res) => {
      
    const { name,description,price,stock,image } = req.body;
// const userId = req.body.UserId;
const productId = req.params.id || req.body.id; 

if (!productId) {
return res.status(400).json({ error: "UserId or ProductId is missing" });
}

try {
const product = await Products.findOne({
where: { id: productId}
});

if (!product) {
return res.status(404).json({ error: "Product not found or unauthorized" });
}

await product.update({
    name,description,price,stock,image
});

res.status(200).json({ message: "Product updated successfully", product });

} catch (error) {
console.error("Error updating product:", error);
res.status(500).json({ error: "Internal server error" });
}

}




}