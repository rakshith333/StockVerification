var Register = require('../model/model')
var axios =require('axios')

exports.homeroutes=(req,res)=>{
    res.render("index");
}
exports.admin_login=(req,res)=>{
    res.render("adminlogin");
}
exports.admin_signup=(req,res)=>{
    res.render("adminsignup");
}
exports.add_admin=(req,res)=>{
  res.render("addadmin");
}
exports.others=(req,res)=>{
    res.render("others");
}
exports.admin_details=(req,res)=>{
  axios.get('http://localhost:3000/api/admin')
     .then(function(response){
       res.render("admindetails",{adminlist:response.data});
     })
     .catch(err=>{
       res.send(err);
     })
}
exports.update_admin=(req,res)=>{
  axios.get('http://localhost:3000/api/admin',{params:{id:req.query.id}})
    .then(function(response){
      res.render("updateadmin",{adminlist:response.data});
    })
    .catch(err=>{
      res.send(err);
    })
}


exports.lab_Listing = (req, res)=>{
  //make a get request to
  axios.get('http://localhost:3000/api/lab')
    .then(function(response){
      res.render("LabListing",{lablist:response.data});
    })
    .catch(err=>{
      res.send(err);
    })
}

exports.add_lab = (req, res)=>{
  res.render("addlab");
}

exports.lab_overview = (req, res)=>{
  res.render("laboverview");
}

exports.navigation = (req, res)=>{
  res.render("navigation");
}

exports.add_lab_equip = (req, res)=>{
  res.render("addlabequip");
}

exports.lab_eqip_details = (req, res)=>{
  //make a get request to
  axios.get('http://localhost:3000/api/labequip')
    .then(function(response){
      res.render("labEquipdetails",{labequiplist:response.data});
    })
    .catch(err=>{
      res.send(err);
    })
}

exports.update_lab=(req,res)=>{
  axios.get('http://localhost:3000/api/lab',{params:{id:req.query.id}})
    .then(function(response){
      res.render("updatelab",{lablist:response.data});
    })
    .catch(err=>{
      res.send(err);
    })
}


exports.class_room_listing = (req, res)=>{
  //make a get request to
  axios.get('http://localhost:3000/api/classroom')
    .then(function(response){
      res.render("ClassRoomListing",{classlist:response.data});
    })
    .catch(err=>{
      res.send(err);
    })
}

exports.class_equip_details = (req, res)=>{
  //make a get request to
  axios.get('http://localhost:3000/api/classequip')
    .then(function(response){
      res.render("classEquipdetails",{classequiplist:response.data});
    })
    .catch(err=>{
      res.send(err);
    })
}

exports.add_classroom = (req, res)=>{
  res.render("addClassroom");
}

exports.class_overview = (req, res)=>{
  res.render("classoverview");
}


exports.add_class_equip = (req, res)=>{
  res.render("addclassequipments");
}
