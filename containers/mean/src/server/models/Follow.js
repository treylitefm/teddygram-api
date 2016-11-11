(function() {
    var mongoose = require('mongoose')

    var FollowSchema = new mongoose.Schema({
        follower: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        following: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    })

    mongoose.model('Follow', FollowSchema)
})()
