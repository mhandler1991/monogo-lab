// REQUIREMENTS

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Schema Constructor
var ArticleSchema = new Schema({

    // `title` is required and of type String
    title: {
        // field type of string
      type: String,
        // field is required
      required: true,
        // field is unique (this will ensure that we are not re-populating the same data/articles in to the db)
      unique: true
    },

    // `link` is required and of type String
    link: {
        // field type of string
      type: String,
        // fied is required
      required: true
    },


    // note: {
    //   type: Schema.Types.ObjectId,
    //   ref: "Note"
    // }

  });
  
  // This creates our model from the above schema, using mongoose's model method
  var Article = mongoose.model("Article", ArticleSchema);
  
  // Export the Article model
  module.exports = Article;