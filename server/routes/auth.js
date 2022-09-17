module.exports = function(app, db) {
    app.post('/signin', (req, res) => {
        console.log(req.body);
        res.send('sign in test')
    })
};