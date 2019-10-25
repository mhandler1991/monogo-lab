// Grab the articles as a json
// $.getJSON("/Articles", function(data) {

//     db.Article.find({})
//     .then(function(dbArticle) {
//         // Grab the result of the data pull
//       res.json(dbArticle);
//     //   Send to main page??

//     })
//     .catch(function(err) {
//       res.json(err);
//     });

//   });


// On Button Click Create POP-OUT MODEL
$("#modalBttn").on('click',function(){
    console.log("Modal was Triggered")
    $('#modal').modal('show');
});