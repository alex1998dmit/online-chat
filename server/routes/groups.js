module.exports = function(app, db) {
    app.post('/groups', (req, res) => {
        const note = { title: req.body.title };
        db.collection('groups').insert(note, (err, result) => {
          if (err) { 
            res.send({ 'error': 'An error has occurred' }); 
          } else {
            res.send(result.ops[0]);
          }
        });
    })
};