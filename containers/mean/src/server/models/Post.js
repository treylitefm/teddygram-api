(function() {
    var mongoose = require('mongoose')

    var CommentSchema = new mongoose.Schema({
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post',
            required: true
        },
        comment: {
            type: String,
            required: true,
            trim: true
        }
    }, {timestamps: true})


    var PostSchema = new mongoose.Schema({
        content_url: {
            type: String,
            required: true,
            trim: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        likes: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }],
        comments: [CommentSchema]
    }, {timestamps: true})


    mongoose.model('Post', PostSchema)
    mongoose.model('Comment', CommentSchema)
})()
