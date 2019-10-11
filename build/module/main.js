export const x = 4;
import * as natural from 'natural';
const nounInflector = new natural.NounInflector();
import { Genre, isGenre, templates } from './templates';
import wordLists from './words';
export function randElem(list) {
    return list[Math.floor(Math.random() * list.length)];
}
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
            let wordList = wordLists[thisToken];
            if (typeof alliteration !== 'undefined') {
                wordList = wordList.filter(function (val) {
                    return val[0].toLowerCase() == replacedTokens[alliteration][0].toLowerCase();
                });
                if (!wordList.length) {
                    wordList = wordLists[thisToken];
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
export function generate(genre) {
    if (!genre) {
        genre = Genre.All;
    }
    if (isGenre(genre)) {
        const template = randElem(templates[genre]);
        return generatePhraseFromTemplate(template);
    }
    return 'Sorry, I only do indie, dubstep and metal at the moment.';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFbkIsT0FBTyxLQUFLLE9BQU8sTUFBTSxTQUFTLENBQUM7QUFDbkMsTUFBTSxhQUFhLEdBQUcsSUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7QUFFbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3hELE9BQU8sU0FBUyxNQUFNLFNBQVMsQ0FBQztBQUVoQyxNQUFNLFVBQVUsUUFBUSxDQUFJLElBQVM7SUFDbkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDdkQsQ0FBQztBQUVELFNBQVMsVUFBVSxDQUFDLEdBQVc7SUFDN0IsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNyQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSTtZQUFFLFNBQVM7UUFDakUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNsQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDNUI7SUFDRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekIsQ0FBQztBQUVELFNBQVMsMEJBQTBCLENBQUMsUUFBZ0I7SUFDbEQsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDO0lBQ3RCLE1BQU0sV0FBVyxHQUFHLGlDQUFpQyxDQUFDO0lBQ3RELE1BQU0sV0FBVyxHQUFHLGdDQUFnQyxDQUFDO0lBQ3JELE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakQsSUFBSSxjQUFjLEdBQWEsRUFBRSxDQUFDO0lBRWxDLElBQUksWUFBWSxFQUFFO1FBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVDLDJCQUEyQjtZQUMzQixJQUFJLFNBQVMsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQUksWUFBZ0MsQ0FBQztZQUNyQyxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFFbkIsZ0NBQWdDO1lBQ2hDLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDekIsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUN6QyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUNqQywwQkFBMEI7b0JBQzFCLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDekMsU0FBUztpQkFDVjthQUNGO1lBRUQsbUVBQW1FO1lBQ25FLE1BQU0saUJBQWlCLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUMzRCxJQUFJLGlCQUFpQixFQUFFO2dCQUNyQixZQUFZLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVDLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUNsRDtZQUVELHNEQUFzRDtZQUN0RCxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3pCLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3pDLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDckM7WUFFRCxvQkFBb0I7WUFDcEIsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUM1QixNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNkLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQzthQUM1QztZQUVELG9GQUFvRjtZQUNwRixJQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDcEMsSUFBSSxPQUFPLFlBQVksS0FBSyxXQUFXLEVBQUU7Z0JBQ3ZDLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVMsR0FBRztvQkFDckMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksY0FBYyxDQUFDLFlBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDekYsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7b0JBQ3BCLFFBQVEsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQ2pDO2FBQ0Y7WUFFRCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUIsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsSUFBSSxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdEM7WUFFRCxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDM0MsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzQjtLQUNGO0lBQ0QsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDNUIsQ0FBQztBQUVELE1BQU0sVUFBVSxRQUFRLENBQUMsS0FBeUI7SUFDaEQsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNWLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO0tBQ25CO0lBRUQsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDbEIsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sMEJBQTBCLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDN0M7SUFDRCxPQUFPLDBEQUEwRCxDQUFDO0FBQ3BFLENBQUMifQ==