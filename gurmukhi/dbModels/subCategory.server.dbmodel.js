/**
 * Created by r on 25/10/2015.
 */
// gurmukhi.server.dbmodel.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var subCategoryScheme = new Schema({
        categoryName_id:  { type: Schema.ObjectId, required: true },
        subCategoryName: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('SubCategory',subCategoryScheme)
