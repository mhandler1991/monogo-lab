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


// On Button Click - NOTE - Create POP-OUT MODEL
$("#modalBttn").on('click',function(){

    // Console Logging
    console.log("Modal was Triggered");

    // Define Article Id
    var articleId = $("#modalBttn").attr("data-id");

    // Log Modal
    console.log("Article Id: ",articleId);


    // QUERY NOTES DATA:
    // $.ajax({
    //     method: "GET",
    //     url: "/articles/" 
    // })


    // Show Modal
    $('#modal').modal('show');
});


// On Button Click - SAVE - Upsert Note
$("#saveBttn").on('click',function(){

    // Console Logging
    console.log("Save Bttn Triggeed");

    // Define Article Id
    var articleId = $("#modalBttn").attr("data-id");

    // Log Modal
    console.log("Article Id: ",articleId);

    // SAVE NOTES DATA:

});