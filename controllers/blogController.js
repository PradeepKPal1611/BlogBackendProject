const Post = require('../models/postModel');
const { ObjectID } = require('mongodb');

const loadBlog = async (req, res) => {
    try {
        const posts = await Post.find({});
        res.render('blog', { posts: posts });
    } catch (error) {
        console.log(error.message);
    }
}

const loadPost = async (req, res) => {
    try {
        const post = await Post.findOne({ "_id": req.params.id });
        res.render('post', { post: post });
    } catch (error) {
        console.log(error.message);
    }
}

const addComment = async (req, res) => {
    try {
        var post_id = req.body.post_id;
        var username = req.body.username;
        var email = req.body.email;
        var comment = req.body.comment;

        var commit_id = new ObjectID();


        await post.findByIdAndUpdate({ _id: post_id }, {
            $push: {
                "comments": { _id: commit_id, username: username, email: email, comment: comment }
            }
        });

        res.status(200).send({ success: true, msg: 'Comment Added!' });
    } catch (error) {
        res.status(200).send({ success: false, msg: error.message });
    }
}

const doReply = async (req, res)=> {
    try{
     var reply_id = new ObjectID();
     Post.updateOne(){
      "_id" : ObjectID(req.body.post_id),
      "comments.id" : ObjectID(req.body.comment_id)
     },{
         $push : {
            "comments.$.replies": {_id:reply_id, name:req.body.name, reply: req.body.reply
            }       
                
        });

        res.status(200).send({ success: true, msg:"Reply Added!" });

     }
    } catch (error) {
        res.status(200).send({ success: false, msg: error.message });
}

module.exports = {
    loadBlog,
    loadPost,
    addComment,
    doReply
}