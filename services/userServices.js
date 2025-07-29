import { promises as fs } from 'fs'
import User from '../models/user.js'
import Product from '../models/products.js';

export const createUserService = async (file, data) => {
    console.log(data);

    const newUserDetails = new User(data)
    const result = await newUserDetails.save()


    console.log(result);


    // await fs.appendFile(`C:/Users/karthi.karthik/OneDrive/Desktop/E64/backend-basics/database/${file}`, `\n \n ${data}`)

    return { success: true }


}