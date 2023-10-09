const express = require("express");
const admin_route = express();

const adminController = require("../controllers/adminController");

admin_route.get('/',adminController.blogOne);
admin_route.get('/blog',adminController.blogTwo);
admin_route.get('/blog-setup',adminController.blogSetup);

module.exports = admin_route;