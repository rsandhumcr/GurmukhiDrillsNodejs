/**
 * Created by r on 28/10/2015.
 */

var dataProvider = require('./DataProvider');
var arrayUtils = require('./ArrayUtils');

var grmkGenMultQuestion = grmkGenMultQuestion || {};

grmkGenMultQuestion.generateQuestion = function(error, orderId, numberOfOptions, callback){
    if (error) {
        throw error;
    }
    var selectedLetter = dataProvider.filterLettersByOrder([orderId]);
    arrayUtils.generateRowColumnIndexArray(null, 5, 40,selectedLetter[0].rowLocation, selectedLetter[0].columnLocation,
        function(selectionData){

            arrayUtils.generateRandomArraySelection(null,selectionData, numberOfOptions,
                function(dataSample){

                    dataSample.push(orderId);
                    var letterData = dataProvider.filterLettersByOrder(dataSample);
                    arrayUtils.shuffle(null, letterData,
                        function(data1){

                            var outputData = {  options : data1, answerIndex : 0 };
                            for(var iloop = 0; iloop < data1.length; iloop++){
                                if(data1[iloop].order == orderId ){
                                    outputData.answerIndex = iloop;
                                }
                        }
                        callback(outputData );
                })
        } );

    } );

}

grmkGenMultQuestion.generatePictureQuestion = function(error, orderId, numberOfOptions, callback){
    if (error) {
        throw error;
    }

    grmkGenMultQuestion.generateQuestion(null, orderId, numberOfOptions, function(basicQuestionData){
        var answer = basicQuestionData.options[basicQuestionData.answerIndex];
        var pageData = { question : {
            name : answer.name,
            image : answer.media.image,
            nameaudio : answer.media.namefile,
            pronouncefile : answer.media.pronouncefile, }, options : []};

        basicQuestionData.options.forEach(function(optionItem){
            pageData.options.push( {
                name : optionItem.name,
                label : String.fromCharCode(97 + pageData.options.length),
                punjabi :  optionItem.punjabi,
                english : optionItem.english,
                englishEquivalent : optionItem.englishEquivalent,
                isAnswer :  (answer.order == optionItem.order)
                }
            );
        });

        callback(pageData);
    })
}

module.exports = {
  generateQuestion :grmkGenMultQuestion.generateQuestion,
  generatePictureQuestion : grmkGenMultQuestion.generatePictureQuestion
};