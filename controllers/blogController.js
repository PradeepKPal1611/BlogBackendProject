const Post = require("../routes/postModel ");

const loadBlog = async(req, res)=>{

    try{
        const posts = await Post.find({});
        res.render('blog',{posts:posts});

    }catch(error){
        console.log(error.message);
    }

}

module.exports = {
    loadBlog
}