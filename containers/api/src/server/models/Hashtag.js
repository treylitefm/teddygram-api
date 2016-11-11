(function() {
    var mongoose = require('mongoose')

    var HashtagSchema = new mongoose.Schema({
        hashtag: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        posts: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post',
            required: true
        }]
    }, {timestamps: true})

    mongoose.model('Hashtag', HashtagSchema)
})()
