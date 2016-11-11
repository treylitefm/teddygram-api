(function() {
    function PostController() {
        var mongoose = require('mongoose')
        var Post = mongoose.model('Post')
        var User = mongoose.model('User')

        function _create_post(req, res) {
            Post.create(req.body, function(err, post) {
                if (req.body.comments.length > 0) {
                    //TODO: save hashtags
                    console.log("TODO: SAVE HASHTAGS")
                }
                User.findOne({_id:req.body.user}, function(err, user) {
                    user.posts.push(post._id)
                    user.save(function(err) {
                        res.json(err || {success:true})    
                    })
                })
            })
        }

        function _create_comment(req, res) {
            Post.findOne({_id:req.body.post}, function(err, post) {
                post.comments.push(req.body)
                //TODO: save hashtags
                console.log("TODO: SAVE HASHTAGS")
                post.save(function(err) {
                    res.json(err || post)
                })
            })
        }

        function _create_like(req, res) {
            Post.findOne({_id: req.body.post}, function(err, post) {
                var idx = post.likes.indexOf(req.body.post)

                if (idx < 0) {
                    post.likes.push(req.body.user)
                } else {
                    post.likess.splice(idx, 1)
                }

                post.save(function(err) {
                    res.json(err || post)
                })
            })
        
        }

        return {
            create_comment: _create_comment,
            create_like: _create_like,
            create_post: _create_post
        }
    }

    module.exports = new PostController()
})()
