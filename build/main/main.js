"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = 4;
const natural = __importStar(require("natural"));
const nounInflector = new natural.NounInflector();
const templates_1 = require("./templates");
const words_1 = __importDefault(require("./words"));
function randElem(list) {
    return list[Math.floor(Math.random() * list.length)];
}
exports.randElem = randElem;
function capitalize(str) {
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
        var w = words[i];
        if (w == 'and' || w == 'the' || w == 'or' || w == 'of')
            continue;
        var j = w.charAt(0).toUpperCase();
        words[i] = j + w.substr(1);
    }
    return words.join(' ');
}
function generatePhraseFromTemplate(template) {
    let phrase = template;
    const regexGlobal = /\{\{[a-z0-9_\|\?\[\]\(\)]+\}\}/g;
    const regexSingle = /\{\{[a-z0-9_\|\?\[\]\(\)]+\}\}/;
    const tokenMatches = template.match(regexGlobal);
    let replacedTokens = [];
    if (tokenMatches) {
        for (var i = 0; i < tokenMatches.length; i++) {
            // for each {{token}} found
            let thisToken = tokenMatches[i].slice(2, -2);
            let alliteration;
            var plural = false;
            // ? means the token is optional
            if (thisToken.match(/\?/)) {
                thisToken = thisToken.replace(/\?/g, '');
                if (Math.floor(Math.random() * 2)) {
                    // 50% chance of including
                    phrase = phrase.replace(regexSingle, '');
                    continue;
                }
            }
            // [a0] means use the same first letter as element 0 (alliteration)
            const alliterationMatch = thisToken.match(/\[a([0-9]+)\]/);
            if (alliterationMatch) {
                alliteration = Number(alliterationMatch[1]);
                thisToken = thisToken.replace(/\[a[0-9]+\]/, '');
            }
            // | means "or", so pick a token type from the choices
            if (thisToken.match(/\|/)) {
                var allowedTokens = thisToken.split('|');
                thisToken = randElem(allowedTokens);
            }
            // [pl] means plural
            if (thisToken.match(/\[pl]/)) {
                plural = true;
                thisToken = thisToken.replace(/\[pl]/, '');
            }
            // if alliteration, filter the wordlist to only use words with the same first letter
            let wordList = words_1.default[thisToken];
            if (typeof alliteration !== 'undefined') {
                wordList = wordList.filter(function (val) {
                    return val[0].toLowerCase() == replacedTokens[alliteration][0].toLowerCase();
                });
                if (!wordList.length) {
                    wordList = words_1.default[thisToken];
                }
            }
            var word = randElem(wordList);
            if (plural) {
                word = nounInflector.pluralize(word);
            }
            phrase = phrase.replace(regexSingle, word);
            replacedTokens.push(word);
        }
    }
    return capitalize(phrase);
}
function generate(genre) {
    if (!genre) {
        genre = templates_1.Genre.All;
    }
    if (templates_1.isGenre(genre)) {
        const template = randElem(templates_1.templates[genre]);
        return generatePhraseFromTemplate(template);
    }
    return 'Sorry, I only do indie, dubstep and metal at the moment.';
}
exports.generate = generate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFhLFFBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUVuQixpREFBbUM7QUFDbkMsTUFBTSxhQUFhLEdBQUcsSUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7QUFFbEQsMkNBQXdEO0FBQ3hELG9EQUFnQztBQUVoQyxTQUFnQixRQUFRLENBQUksSUFBUztJQUNuQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUN2RCxDQUFDO0FBRkQsNEJBRUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxHQUFXO0lBQzdCLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDckMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUk7WUFBRSxTQUFTO1FBQ2pFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzVCO0lBQ0QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3pCLENBQUM7QUFFRCxTQUFT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