var natural = require('natural'),
    nounInflector = new natural.NounInflector();

var data = {
    n_abstract:         require('./words/n_abstract.js').data,
    n_animal:           require('./words/n_animal.js').data,
    n_dark:             require('./words/n_dark.js').data, // dark metal nouns
    n_group:            require('./words/n_group.js').data,
    n_groupgangsta:     require('./words/n_groupgangsta.js').data, // gangsta group names
    n_mythcreature:     require('./words/n_mythcreature.js').data,
    
    adj_personality:    require('./words/adj_personality.js').data,
    adj_color:          require('./words/adj_color.js').data,
    adj_dark:           require('./words/adj_dark.js').data,
    
    name_first:         require('./words/name_first.js').data,
    
    prefix_dubstep:     require('./words/prefix_dubstep.js').data,
    prefix_rap:         require('./words/prefix_rap.js').data,
    
    suffix:             require('./words/suffix.js').data
};

var templates = {
    test: [
        "The {{n_abstract}} {{n_group}}",
        "{{n_group}} of {{prefix_dubstep}}"
    ],
    indie: [
        "{{n_group}} of {{n_abstract}}",
        "{{n_abstract}} {{n_group}}",
        "The {{n_abstract}} {{n_group}}",
        "{{n_abstract}}{{suffix}}",
        "{{adj_color}} {{n_abstract|n_animal|n_mythcreature}}",
        "{{name_first|n_abstract}}'s {{adj_color?}} {{n_animal|n_abstract}}",
        "{{adj_personality?}} {{name_first}} and the {{adj_color?}} {{n_animal[pl]|n_mythcreature[pl]}}",
        "{{adj_personality}} {{name_first[a0]}}"
    ],
    dubstep: [
        "{{prefix_dubstep}} {{n_mythcreature[a0]}}",
        "{{n_animal?}} {{prefix_dubstep}} {{n_groupgangsta|n_group}}",
        "{{n_group}} of {{prefix_dubstep[a0]}}",
        "{{n_group}} of {{prefix_dubstep}}",
        "{{prefix_dubstep}}{{suffix}}"
    ],
    metal: [
        "{{n_dark}}{{suffix}}",
        "{{n_dark}}{{n_dark}}",
        "{{adj_dark}} {{n_dark}}",
        "{{adj_dark}} {{n_dark}} {{n_animal|n_mythcreature}}",
    ]
    // rap
    // "{{prefix_rap}} {{adj_personality?}} {{name_first|n_animal|n_abstract|n_mythcreature}}"
    // N on the N
    // The Adj (Pl)N
    // n_abstract+n_concrete (eg. doomtree)
    // Name and the Adj (or gerund) PlN
    // PlN of Place
    // Name the adj_personality N
    // adj_personality PlN V PlN (eg pretty girls make graves)
    // gerund name
    
};
templates.all = function() {
    list = [];
    for(var genre in templates) { list = list.concat(templates[genre]); }
    return list;
}();

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
}