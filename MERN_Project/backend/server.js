
const dotenv=require('dotenv');
dotenv.config();
const connectDB=require('./config/db');
//connect to database
connectDB();

const app=require('./app');

app.listen(process.env.PORT||3000,()=>{
    console.log(`Server is running on port http://localhost:3000`);
});