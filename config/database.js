import mongoose from "mongoose"

const connectDatabase = () => {
    try {
        mongoose.connect(`${process.env.CLOUD_MONGO_URI}/${process.env.DB_NAME}`).then((res) => {
            // console.log(res);
            console.log("database connected successfully!");


        }).catch((err) => {
            console.log(err);

        })
    } catch (error) {
        console.log(error);

    }
}

export default connectDatabase