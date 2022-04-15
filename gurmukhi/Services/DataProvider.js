/**
 * Created by r on 25/10/2015.
 */

var grmkDatasource = grmkDatasource || {};

grmkDatasource.letterData = require('./data.json');

grmkDatasource.processAll = function (data){
    var dataLength = data.letters.length;
    var filteredData = [];

    for(var loop=0; loop<dataLength;loop++){

            var letter =data.letters[loop];
            if(grmkDatasource.imagePath != undefined){
                if( letter.media.image != '' && !letter.media.image.startsWith(grmkDatasource.imagePath,0) )
                    letter.media.image = grmkDatasource.imagePath + '/' + letter.media.image;
            }
            if(grmkDatasource.audioPath != undefined){
                if(letter.media.namefile != '' && !letter.media.namefile.startsWith(grmkDatasource.audioPath,0) )
                    letter.media.namefile = grmkDatasource.audioPath + '/' + letter.media.namefile;
                if(letter.media.pronouncefile != '' && !letter.media.pronouncefile.startsWith(grmkDatasource.audioPath,0))
                    letter.media.pronouncefile = grmkDatasource.audioPath + '/' + letter.media.pronouncefile;
            }
            filteredData.push(letter);

    }
    return filteredData;
};

grmkDatasource.filterLetters = function (data){
    var processedData = grmkDatasource.processAll(data);
    //console.dir(processedData);
    var dataLength = processedData.length;
    var filteredData = [];

    for(var loop=0; loop<dataLength;loop++){
        if(processedData[loop].typeLetter == "vowel" || processedData[loop].typeLetter == "consonant" ){
            filteredData.push(processedData[loop]);
        }
    }
    return filteredData;
};


grmkDatasource.filterLettersByRows = function (rows){
    var data = grmkDatasource.getAlphabetLetters();
    var filteredItems = [];
    data.forEach(function(item){
        if( grmkDatasource.arryContains(rows, item.rowLocation)  )
            filteredItems.push(item);
    });
    return filteredItems;
};

grmkDatasource.filterLettersByRowsOrColumns = function (exclude, rows, columns){
    //console.log('exclude : ' + exclude);
    //console.log('rows : ' + rows);
    //console.log('columns : ' + columns);
    var data = grmkDatasource.getAlphabetLetters();
    var filteredItems = [];
    data.forEach(function(item){
        if( exclude.order != item.order){
            if( grmkDatasource.arryContains(rows, item.rowLocation) || grmkDatasource.arryContains(columns, item.columnLocation)){
                filteredItems.push(item);
            }
        }
    });
    return filteredItems;
};

grmkDatasource.filterLettersByRowOrColumn = function (exclude, row, column){
    var data = grmkDatasource.getAlphabetLetters();
    var filteredItems = [];
    data.forEach(function(item){
        if( exclude != item.order){
            if( (item.rowLocation == row) || (item.columnLocation == column) ){
                filteredItems.push(item);
            }
        }
    });
    return filteredItems;
};

grmkDatasource.filterLettersByOrder = function (ordersArray){
    var data = grmkDatasource.getAlphabetLetters();
    var filteredItems = [];
    data.forEach(function(item){
        if( grmkDatasource.arryContains(ordersArray, item.order)  )
            filteredItems.push(item);
    });
    return filteredItems;
};


grmkDatasource.getAll = function(){
    return grmkDatasource.processAll(grmkDatasource.letterData);
};

grmkDatasource.getAlphabetLetters = function(){
    return grmkDatasource.filterLetters(grmkDatasource.letterData);
};

grmkDatasource.setImagePath = function (path){
    grmkDatasource.imagePath = path;
    //console.log('set grmkDatasource.imagePath : ' + grmkDatasource.imagePath);
};
grmkDatasource.setAudioPath  = function (path){
    grmkDatasource.audioPath = path;
    //console.log('set grmkDatasource.audioPath : ' + grmkDatasource.audioPath);
};

grmkDatasource.arryContains = function (a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
};

if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position) {
        position = position || 0;
        return this.indexOf(searchString, position) === position;
    };
}


module.exports = {
    setImagePath : grmkDatasource.setImagePath,
    setAudioPath : grmkDatasource.setAudioPath,
    getAll : grmkDatasource.getAll,
    getAlphabetLetters : grmkDatasource.getAlphabetLetters,
    filterLettersByRows : grmkDatasource.filterLettersByRows,
    filterLettersByRowsOrColumns : grmkDatasource.filterLettersByRowsOrColumns,
    filterLettersByOrder : grmkDatasource.filterLettersByOrder,
    filterLettersByRowOrColumn : grmkDatasource.filterLettersByRowOrColumn
};
