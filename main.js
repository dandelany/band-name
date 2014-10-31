var natural = require('natural'),
    nounInflector = new natural.NounInflector();

var data = require('./words/words.js');
var templates = require('./templates/templates.js');

function randElem(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function capitalize(str) {
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
        var w = words[i];
        if(w == "and" || w == "the" || w == "or" || w == "of") { continue; }
        var j = w.charAt(0).toUpperCase();
        words[i] = j + w.substr(1);
    }
    return words.join(" ");
}

function generatePhraseFromTemplate(template) {
    var phrase = template;
    var regexGlobal = /\{\{[a-z0-9_\|\?\[\]\(\)]+\}\}/g;
    var regexSingle = /\{\{[a-z0-9_\|\?\[\]\(\)]+\}\}/;
    var tokenMatches = template.match(regexGlobal);
    var replacedTokens = [];

    if(tokenMatches) {
        for(var i=0; i<tokenMatches.length; i++) { // for each {{token}} found
            var thisToken = tokenMatches[i].slice(2,-2);
            var alliteration = false;
            var plural = false;

            // ? means the token is optional
            if(thisToken.match(/\?/)) {
                thisToken = thisToken.replace(/\?/g, '');
                if(Math.floor(Math.random()*2)) { // 50% chance of including
                    phrase = phrase.replace(regexSingle, '');
                    continue;
                }
            }

            // [a0] means use the same first letter as element 0 (alliteration)
            if(thisToken.match(/\[a[0-9]+\]/)) {
                alliteration = thisToken.match(/\[a([0-9]+)\]/)[1];
                thisToken = thisToken.replace(/\[a[0-9]+\]/, '');
            }

            // | means "or", so pick a token type from the choices
            if(thisToken.match(/\|/)) {
                var allowedTokens = thisToken.split('|');
                thisToken = randElem(allowedTokens);
            }

            // [pl] means plural
            if(thisToken.match(/\[pl\]/)) {
                plural = true;
                thisToken = thisToken.replace(/\[pl\]/, '');
            }

            // if alliteration, filter the wordlist to only use words with the same first letter
            var wordList = data[thisToken];
            if(alliteration !== false) {
                wordList = data[thisToken].filter(function(val) {
                    return val[0].toLowerCase() == replacedTokens[alliteration][0].toLowerCase();
                });
                if(!wordList.length) { wordList = data[thisToken]; }
            }

            var word = randElem(wordList);
            if(plural) { word = nounInflector.pluralize(word); }

            phrase = phrase.replace(regexSingle, word);
            replacedTokens.push(word);
        }
    }
    return capitalize(phrase);
}

exports.generate = function(genre) {
    if(!genre) { genre = 'all'; }
    if(!(genre in templates)) { return "Sorry, i only do indie, dubstep and metal at the moment."; }
    return generatePhraseFromTemplate(randElem(templates[genre]));
};