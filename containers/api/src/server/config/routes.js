(function(app) {
    var rest = require('../controllers/rest.js')
    
    var users_rest = rest('User')
    var posts_rest = rest('Post')
    var hashtags_rest = rest('Hashtag')
    var follows_rest = rest('Follow')

    var posts = require('../controllers/posts.js')

    module.exports = function(app) {
        app.get('/users', users_rest.fetch)
        app.get('/posts', posts_rest.fetch)
        app.get('/hashtags', hashtags_rest.fetch)
        app.get('/follows', follows_rest.fetch)

        app.get('/users/:id', users_rest.fetchOne)
        app.get('/posts/:id', posts_rest.fetchOne)
        app.get('/hashtags/:id', hashtags_rest.fetchOne)
        app.get('/follows/:id', follows_rest.fetchOne)

        app.post('/users', users_rest.create)
        app.post('/hashtags', hashtags_rest.create)
        app.post('/follows', follows_rest.create)

        app.post('/posts', posts.create_post)
        app.post('/comments', posts.create_comment)
        app.post('/likes', posts.create_like)

        app.put('/users/:id', users_rest.update)
        app.put('/posts/:id', posts_rest.update)
        app.put('/hashtags/:id', hashtags_rest.update)
        app.put('/follows/:id', follows_rest.update)
    }
})()
