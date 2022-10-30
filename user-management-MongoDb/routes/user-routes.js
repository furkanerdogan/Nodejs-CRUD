const express=require('express');
const { getAllUsers, addUser, updateUser, deleteUser, getUserById } = require('../controller/user-controller');

const router=express.Router();

router.get("/",getAllUsers);//localhost/users/{thispart}
router.get("/:id",getUserById);
router.post("/",addUser);
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);

module.exports=router;