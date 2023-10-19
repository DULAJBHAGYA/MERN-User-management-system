const express = require('express');
const Users = require('../models/users');

const router = express.Router();

//save posts
router.post('/user/save', async (req, res) => {
    try {
      let newUser = new Users(req.body);
      await newUser.save();
      return res.status(200).json({
        success: "User saved successfully",
      });
    } catch (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
  });


//get post 
router.get('/users', async (req, res) => {
    try {
      const users = await Users.find();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
  });

// get specific post
router.get("/user/:id", async (req, res) => {
    try {
      const userId = req.params.id;
      console.log("userId:", userId);
      const user = await Users.findById(userId).exec();
  
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
  
      return res.status(200).json({
        success: true,
        user
      });
    } catch (error) {
      return res.status(400).json({ success: false, error: error.message });
    }
  });
  
  


//update posts
router.put('/user/update/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const updatedPost = await Users.findByIdAndUpdate(id, req.body, { new: true });
      return res.status(200).json({
        success: "User updated successfully",
      })
    } catch (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
  });

// delete post
router.delete('/user/delete/:id', async (req, res) => {
    try {
      const deletedUser = await Users.findOneAndDelete({ _id: req.params.id });
      if (!deletedUser) {
        return res.status(404).json({
          message: 'User not found',
        });
      }
      return res.json({
        message: 'Delete successful',
        deletedUser,
      });
    } catch (error) {
      return res.status(400).json({
        message: 'Delete unsuccessful',
        error: error.message,
      });
    }
  });
  
module.exports = router;
