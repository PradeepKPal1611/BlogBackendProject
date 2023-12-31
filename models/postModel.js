const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    
    title:{
        type:String,
        required:true
    },
    content: {
        type: String,
        required: true
    },
    image:{
        type: String,
        default:true
    },
    comments:{
        type: Object,
        default: {}
    }
});

module.exports = mongoose.model('post', postSchema);
