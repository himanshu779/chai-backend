// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import express from "express"
import connectDB from "./db/index.js";



const app = express()

 dotenv.config({
    path: './.env'
 })



connectDB()
.then (() => {
   app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
   })
})
.catch((err)=> {
   console.log("MONGO db connection failed!!", err );
})








//  import express from "express"
//  const app = express()

// (
//     async () => {
//         try {
//             await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//             app.on("error",() => {
//                 console.log("ERR:", error)
//                 throw error
//             })

//             app.listen(process.env.PORT, () => {
//                 console.log('App is Listening on port $ {process.env.PORT}')
//             })
//         } catch (error) {
//             console.error("ERROR:", error)

//         }
//     }
// )