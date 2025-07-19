import { promises as fs } from 'fs'

export const createUserService = async (file, data) => {
    try {


        await fs.appendFile(`C:/Users/karthi.karthik/OneDrive/Desktop/E64/backend-basics/database/${file}`, `\n \n ${data}`)


        return { success: true }

    } catch (error) {
        console.log(error);
        return { success: false }

    }
}