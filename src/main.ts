export const x = 4;

import * as natural from 'natural';
const nounInflector = new natural.NounInflector();

import { Genre, isGenre, templates } from './templates';
import wordLists from './words';

export function randElem<T>(list: T[]): T {
  return list[Math.floor(Math.random() * list.length)];
}

function capitalize(str: string): string {
  var words = str.split(' ');
  for (var i = 0; i < words.length; i++) {
    var w = words[i];
    if (w == 'and' || w == 'the' || w == 'or' || w == 'of') continue;
    var j = w.charAt(0).toUpperCase();
    words[i] = j + w.substr(1);
  }
  return words.join(' ');
}

function generatePhraseFromTemplate(template: string): string {
  let phrase = template;
  const regexGlobal = /\{\{[a-z0-9_\|\?\[\]\(\)]+\}\}/g;
  const regexSingle = /\{\{[a-z0-9_\|\?\[\]\(\)]+\}\}/;
  const tokenMatches = template.match(regexGlobal);
  let replacedTokens: string[] = [];

  if (tokenMatches) {
    for (var i = 0; i < tokenMatches.length; i++) {
      // for each {{token}} found
      let thisToken = tokenMatches[i].slice(2, -2);
      let alliteration: number | undefined;
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
        wordList = wordList.filter(function(val) {
          return val[0].toLowerCase() == replacedTokens[alliteration as number][0].toLowerCase();
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

export function generate(genre: string | undefined): string {
  if (!genre) {
    genre = Genre.All;
  }

  if (isGenre(genre)) {
    const template = randElem(templates[genre]);
    return generatePhraseFromTemplate(template);
  }
  return 'Sorry, I only do indie, dubstep and metal at the moment.';
}
