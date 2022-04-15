/**
 * Created by r on 25/10/2015.
 */
// category.server.dbmodel.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categoryScheme = new Schema({
        categoryName: {
                type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('Category',categoryScheme)