import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/e-comm');

const Schema = new mongoose.Schema({
    name:String,
    password:Number
})
const Product = mongoose.model('Product',Schema);


app.get("/",(req,res)=>{
    res.send("Jay Mata Di");
})
app.get("/api/user",(req,res)=>{
    Product.find().then((data)=>{
        res.json(data);
        }).catch((err)=>{
            res.json({message:err});
            })
})
app.post('/api/user',async(req,res)=>{
    console.log(req.body);
    const data = new Product(req.body);
const result = await data.save();
res.status(201).json(result);
})

// app.delete('/api/user/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deletedProduct = await Product.findByIdAndDelete(id);
//         if (deletedProduct) {
//             res.status(200).json({ message: "User deleted successfully" });
//         } else {
//             res.status(404).json({ message: "User not found" });
//         }
//     } catch (error) {
//         res.status(500).json({ message: "Error deleting user", error });
//     }
// });

app.delete('/api/user/:id',async (req,res) => {

    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted successfully" });

})
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
    })