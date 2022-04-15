/**
 * Created by r on 25/10/2015.
 */
// gurmukhi.server.dbmodel.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var translationScheme = new Schema({
        category_Id : { type: Schema.ObjectId, required: true },
        subCategory_Id:  { type: Schema.ObjectId, required: true },
        punjabi: {
            type: String
            , required: true
        },
        english: {
            type: String
            , required: true
        }
    }
);

module.exports = mongoose.model('Translation',translationScheme)
