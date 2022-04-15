/**
 * Created by r on 31/10/2015.
 */

var grmkGenArrayUtil = grmkGenArrayUtil || {};

grmkGenArrayUtil.generateRowColumnIndexArray = function(error, rowSize, dataLength, rowIndex, columnIndex, callback){
    if (error) {
        throw error;
    }
    var numberOfColumns = Math.floor( dataLength / rowSize);
    var sizeSelectOfData = rowSize + numberOfColumns;
    var selectionData = [];
    var selectetedNumber = (rowSize * rowIndex) +  columnIndex;
    for(var iloop=0; iloop < rowSize ; iloop++ )
    {
        var itemNumber = ( (rowSize * rowIndex) + iloop);
        if(selectetedNumber != itemNumber) {
            selectionData.push(itemNumber);
        }
    }
    for(var iloop=0; iloop < numberOfColumns ; iloop++ )
    {
        var itemNumber = ((iloop * rowSize ) + columnIndex );
        if(selectetedNumber != itemNumber){
            selectionData.push( itemNumber );
        }
    }
    if( callback)
        callback(selectionData);
};

grmkGenArrayUtil.generateRandomArraySelection = function(error, arraySelection, numberOf, callback){
    if (error) {
        throw error;
    }

    if( arraySelection.length < numberOf)
        return arraySelection;

    var selection = [];
    var selectedNumbers = [];
    while(selection.length < numberOf){
        grmkGenArrayUtil.generateRandomUniqueNumber(null, arraySelection.length, selectedNumbers, function(randomNum){
            var selectedArrayItem = arraySelection[randomNum];
            if(selectedArrayItem != undefined){
                selection.push(arraySelection[randomNum]);
                selectedNumbers.push(randomNum);
            }
        });
    }
    callback(selection);
}

grmkGenArrayUtil.generateRandomUniqueNumber = function(error, range, selectedNumbers, callback){
    if (error) {
        throw error;
    }
    var randomNo = grmkGenArrayUtil.generateRandomInt(range);
    if(selectedNumbers.length > 0){
        while( grmkGenArrayUtil.arryContains(selectedNumbers, randomNo) ){
            randomNo = grmkGenArrayUtil.generateRandomInt(range);
        }
    }
    callback(randomNo);
}

grmkGenArrayUtil.shuffle = function (error, array, callback) {
    if (error) {
        throw error;
    }
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    callback(array);
}


grmkGenArrayUtil.generateRandomInt = function(range){
    return Math.floor((Math.random() * range) + 1);
}


grmkGenArrayUtil.arryContains = function (a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
};

module.exports = {
    generateRowColumnIndexArray : grmkGenArrayUtil.generateRowColumnIndexArray,
    generateRandomArraySelection : grmkGenArrayUtil.generateRandomArraySelection,
    shuffle : grmkGenArrayUtil.shuffle
};