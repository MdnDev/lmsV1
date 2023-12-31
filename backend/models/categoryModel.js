import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subCategories: {
        type: String,
        required: false
    },
},
{   
    timestamps: true,
})

const Category = mongoose.model('Category', categorySchema);

export default Category;