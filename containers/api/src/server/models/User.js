(function() {
    var mongoose = require('mongoose')

    var UserSchema = new mongoose.Schema({
        handle: {
            type: String,
            maxlength: 20,
            required: true,
            trim: true
        },
        bio: {
            type: String,
            trim: true
        },
        website: {
            type: String,
            trim: true
        },
        first_name: {
            type: String,
            maxlength: 20,
            required: true,
            trim: true
        },
        last_name: {
            type: String,
            maxlength: 20,
            required: true,
            trim: true
        },
        gender: {
            type: String,
            enum: ['Male', 'Female']
        },
        profile_pic: {
            type: String,
            trim: true
        },
        posts: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }]
    }, {timestamps: true})

    mongoose.model('User', UserSchema)
})()
