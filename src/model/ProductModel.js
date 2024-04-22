const mongoose=require('mongoose')

const DataSchema=mongoose.Schema({
        productName:{type:String, required:true},
        productCode: {type:String, required:true},
        productImage: {type:String, required:true},
        productCategory: {type:String, required:true},
        productQty: {type:String, required:true},
        productPrice: {type:String, required:true}

},{timestamps:true,versionKey:false})

const ProductModel=mongoose.model('products',DataSchema)
module.exports=ProductModel;

