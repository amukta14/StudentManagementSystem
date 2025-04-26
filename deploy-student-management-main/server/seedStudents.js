
import mongoose from "mongoose";
import dotenv from "dotenv";
import Student from "./models/Student.js";

dotenv.config();

const students = [
  { name: "Aarav Reddy", email: "aarav.reddy@cbit.org.in", department: "CSE", rollNo: "160121733134" },
  { name: "Divya Sharma", email: "divya.sharma@gmail.com", department: "IT", rollNo: "160122733045" },
  { name: "Rohan Mehta", email: "rohan.mehta@gmail.com", department: "CSE IoT", rollNo: "160123740008" },
  { name: "Sneha Patel", email: "sneha.patel@cbit.org.in", department: "CSM", rollNo: "160124745101" },
  { name: "Vikram Singh", email: "vikram.singh@gmail.com", department: "AIML", rollNo: "160123749077" },
  { name: "Kavya Rao", email: "kavya.rao@cbit.org.in", department: "AIDS", rollNo: "160122751011" },
  { name: "Aditya Iyer", email: "aditya.iyer@gmail.com", department: "EEE", rollNo: "160121759032" },
  { name: "Nandini Verma", email: "nandini.verma@gmail.com", department: "VLSI", rollNo: "160124769099" },
  { name: "Tarun Desai", email: "tarun.desai@cbit.org.in", department: "ECE", rollNo: "160123737025" },
  { name: "Ishita Agarwal", email: "ishita.agarwal@gmail.com", department: "Mechanical", rollNo: "160121750150" },
  { name: "Rajeev Nair", email: "rajeev.nair@gmail.com", department: "Civil", rollNo: "160122735199" },
  { name: "Megha Kulkarni", email: "megha.kulkarni@cbit.org.in", department: "CSE", rollNo: "160123733172" },
  { name: "Yash Jain", email: "yash.jain@gmail.com", department: "IT", rollNo: "160121731072" },
  { name: "Ananya Joshi", email: "ananya.joshi@cbit.org.in", department: "AIML", rollNo: "160124768142" },
];

mongoose.connect(process.env.MONGO_URI).then(async () => {
    console.log("Connected to MongoDB Atlas. Inserting data...");
    await Student.deleteMany();
    await Student.insertMany(students);
    console.log("✅ Data inserted!");
    mongoose.disconnect();
  }).catch(err => {
    console.error("❌ Failed to connect or insert data:", err);
  });