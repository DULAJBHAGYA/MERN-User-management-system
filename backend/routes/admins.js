const express = require('express');
const Users = require('../models/admins');

const router = express.Router();

//save posts
router.post('/admin/save', async (req, res) => {
    try {
      let newAdmin = new Admins(req.body);
      await newAdmin.save();
      return res.status(200).json({
        success: "Admin saved successfully",
      });
    } catch (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
  });


//get post 
router.get('/admins', async (req, res) => {
    try {
      const users = await Admins.find();
      return res.status(200).json(admins);
    } catch (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
  });

// get specific post
router.get("/admin/:id", async (req, res) => {
    try {
      const userId = req.params.id;
      console.log("userId:", adminId);
      const user = await Admins.findById(adminId).exec();
  
      if (!admin) {
        return res.status(404).json({ success: false, message: 'Admin not found' });
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
router.put('/admin/update/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const updatedAdmin = await Admins.findByIdAndUpdate(id, req.body, { new: true });
      return res.status(200).json({
        success: "Admin updated successfully",
      })
    } catch (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
  });

// delete post
router.delete('/admin/delete/:id', async (req, res) => {
    try {
      const deletedAdmin = await Admins.findOneAndDelete({ _id: req.params.id });
      if (!deletedAdmin) {
        return res.status(404).json({
          message: 'Admin not found',
        });
      }
      return res.json({
        message: 'Delete successful',
        deletedAdmin,
      });
    } catch (error) {
      return res.status(400).json({
        message: 'Delete unsuccessful',
        error: error.message,
      });
    }
  });
  
module.exports = router;
