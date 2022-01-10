const mongoose = require("mongoose");

const classEquipSchema = new mongoose.Schema({
  class_id : {type: String, required:true},
  room_no : {type: String, required: true},
  item_name:{type:String, required:true},
  company_name:{type:String,required:false},
  model_no: {type:String,required:false},
  doi : {type:String,required:true},
  condition:{type:String,required:true}
});
const Classequip = mongoose.model("Classequip",classEquipSchema);

module.exports = Classequip;
