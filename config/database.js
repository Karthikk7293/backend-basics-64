import mongoose from "mongoose"

const connectDatabase = () => {
    try {
        mongoose.connect('mongodb://localhost:27017/testdatabase').then((res) => {
            // console.log(res);
            console.log("database connected successfully!");


        }).catch((err) => {
            console.log(err);

        })
    } catch (error) {

    }
}

export default connectDatabase