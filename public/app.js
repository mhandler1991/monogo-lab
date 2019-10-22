// Grab the articles as a json
$.getJSON("/articles", function(data) {

    db.Article.find({})
    .then(function(dbArticle) {
        // Grab the result of the data pull
      res.json(dbArticle);

    //   Send to main page??

    })
    .catch(function(err) {
      res.json(err);
    });

  });