const express = require('express');
const route =express.Router();

const services = require('../services/render')
const controller =require('../controller/controller')
route.get('/',services.homeroutes);
route.get('/adminlogin',services.admin_login);
route.get('/adminsignup',services.admin_signup);
route.get('/others',services.others);
route.get('/admindetails',services.admin_details);
route.get('/addadmin',services.add_admin);
route.get('/update_admin',services.update_admin);

route.get('/LabListing',services.lab_Listing);
route.get('/addlab',services.add_lab);
route.get('/laboverview',services.lab_overview);
route.get('/labEquipdetails',services.lab_eqip_details);
route.get('/navigation',services.navigation);
route.get('/addlabequip',services.add_lab_equip);
route.get('/update_lab',services.update_lab);

route.get('/ClassRoomListing',services.class_room_listing);
route.get('/addClassroom',services.add_classroom);
route.get('/classoverview',services.class_overview);
route.get('/classEquipdetails',services.class_equip_details);
route.get('/addclassequipments',services.add_class_equip);

//api
route.post('/adminsignup',controller.createR)
route.post('/api/admin',controller.createA)
route.post('/api/labequip',controller.createL);
route.post('/api/lab',controller.createLA);
route.post('/api/classroom',controller.createCL);
route.post('/api/classequip',controller.createCE);

route.post('/adminlogin',controller.findA)
route.get('/api/admin',controller.find)
route.get('/api/lab',controller.findLA);
route.get('/api/labequip',controller.findLE);
route.get('/api/classroom',controller.findCL);
route.get('/api/classequip',controller.findCE);

route.put('/api/admin/:id',controller.updateA);
route.put('/api/lab/:id',controller.updateL);
route.delete('/api/admin/:id',controller.deleteA);

module.exports = route
