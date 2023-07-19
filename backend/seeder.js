import mongoose from 'mongoose';
import dotenv from 'dotenv'
import colors from 'colors'
import products from './data/products.js'
import categories from './data/categories.js'
import clients from './data/clients.js'
import User from './models/userModel.js'
import connectDB from './config/db.js'
import Product from "./models/productModel.js"
import users from "./data/users.js"
// import users from "./data/accessories.js"
import Category from './models/categoryModel.js';


dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Product.deleteMany()
        await User.deleteMany()
        await Category.deleteMany()

        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map(product => {
            return { ...product, user: adminUser }
            
        })

        const sampleCategories = categories.map(category => {
            return { ...category, user: adminUser }
        })

        

        await Product.insertMany(sampleProducts)
        await Category.insertMany(sampleCategories)
        

        console.log('data imported !'.green.inverse)
        process.exit()

    } catch(error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}



const destroyData = async () => {
    try {
        await Product.deleteMany()
        await User.deleteMany()
        await Category.deleteMany()

        console.log('Data Destroyed!'.red.inverse)
        process.exit()

    } catch(error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

if(process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}