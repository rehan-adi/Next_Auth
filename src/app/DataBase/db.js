import mongoose from "mongoose";

const connect = async () => {

    try {
        await mongoose.connect(process.env.MONGO);
      } catch (error) {
        throw new error ("Connection Failed")
      }

}


export default connect;