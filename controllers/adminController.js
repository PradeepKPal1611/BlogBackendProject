const blogOne = async(req, res)=>{

    res.send('Blog 1');

}

const blogTwo = async(req, res)=>{

    res.send('Blog 2');

}

const blogSetup = async(req, res)=>{

    res.send('New Blog Setup here');

}

module.exports = {
    blogOne,
    blogTwo,
    blogSetup
}