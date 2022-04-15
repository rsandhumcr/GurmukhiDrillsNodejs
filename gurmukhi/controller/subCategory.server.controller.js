/**
 * Created by r on 25/10/2015.
 */
var Category = require('../dbModels/subCategory.server.dbmodel');

exports.create = function(req, res){
    var entity = new Category({
        categoryName : req.body.categoryName
    });

    entity.save();

    res.redirect(301, '/categories');
};


exports.getAll = function(req, res){
    var query = Category.find(function(err, results){
        if(err == null)
        {
            console.log('results' + results);
            res.render('categories', { title: 'categories', results : results });
        }
    });

};
