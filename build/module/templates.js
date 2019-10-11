export var Genre;
(function (Genre) {
    Genre["Test"] = "test";
    Genre["Indie"] = "indie";
    Genre["Dubstep"] = "dubstep";
    Genre["Metal"] = "metal";
    Genre["All"] = "all";
})(Genre || (Genre = {}));
function isPropertyValue(object, possibleValue) {
    return Object.values(object).includes(possibleValue);
}
export function isGenre(str) {
    return isPropertyValue(Genre, str);
}
var genreTemplates = {
    [Genre.Test]: ['The {{n_abstract}} {{n_group}}', '{{n_group}} of {{prefix_dubstep}}'],
    [Genre.Indie]: [
        '{{n_group}} of {{n_abstract}}',
        '{{n_abstract}} {{n_group}}',
        'The {{n_abstract}} {{n_group}}',
        '{{n_abstract}}{{suffix}}',
        '{{adj_color}} {{n_abstract|n_animal|n_mythcreature}}',
        "{{name_first|n_abstract}}'s {{adj_color?}} {{n_animal|n_abstract}}",
        '{{adj_personality?}} {{name_first}} and the {{adj_color?}} {{n_animal[pl]|n_mythcreature[pl]}}',
        '{{adj_personality}} {{name_first[a0]}}'
    ],
    [Genre.Dubstep]: [
        '{{prefix_dubstep}} {{n_mythcreature[a0]}}',
        '{{n_animal?}} {{prefix_dubstep}} {{n_groupgangsta|n_group}}',
        '{{n_group}} of {{prefix_dubstep[a0]}}',
        '{{n_group}} of {{prefix_dubstep}}',
        '{{prefix_dubstep}}{{suffix}}'
    ],
    [Genre.Metal]: [
        '{{n_dark}}{{suffix}}',
        '{{n_dark}}{{n_dark}}',
        '{{adj_dark}} {{n_dark}}',
        '{{adj_dark}} {{n_dark}} {{n_animal|n_mythcreature}}'
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
export const templates = {
    ...genreTemplates,
    [Genre.All]: [].concat.apply([], Object.values(genreTemplates))
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RlbXBsYXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQU4sSUFBWSxLQU1YO0FBTkQsV0FBWSxLQUFLO0lBQ2Ysc0JBQWEsQ0FBQTtJQUNiLHdCQUFlLENBQUE7SUFDZiw0QkFBbUIsQ0FBQTtJQUNuQix3QkFBZSxDQUFBO0lBQ2Ysb0JBQVcsQ0FBQTtBQUNiLENBQUMsRUFOVyxLQUFLLEtBQUwsS0FBSyxRQU1oQjtBQUVELFNBQVMsZUFBZSxDQUFJLE1BQVMsRUFBRSxhQUFrQjtJQUN2RCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3ZELENBQUM7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUFDLEdBQVc7SUFDakMsT0FBTyxlQUFlLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3JDLENBQUM7QUFFRCxJQUFJLGNBQWMsR0FBbUQ7SUFDbkUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBRSxtQ0FBbUMsQ0FBQztJQUNyRixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNiLCtCQUErQjtRQUMvQiw0QkFBNEI7UUFDNUIsZ0NBQWdDO1FBQ2hDLDBCQUEwQjtRQUMxQixzREFBc0Q7UUFDdEQsb0VBQW9FO1FBQ3BFLGdHQUFnRztRQUNoRyx3Q0FBd0M7S0FDekM7SUFDRCxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUNmLDJDQUEyQztRQUMzQyw2REFBNkQ7UUFDN0QsdUNBQXVDO1FBQ3ZDLG1DQUFtQztRQUNuQyw4QkFBOEI7S0FDL0I7SUFDRCxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNiLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLHFEQUFxRDtLQUN0RDtJQUNELE1BQU07SUFDTiwwRkFBMEY7SUFDMUYsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQix1Q0FBdUM7SUFDdkMsbUNBQW1DO0lBQ25DLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsMERBQTBEO0lBQzFELGNBQWM7Q0FDZixDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUErQjtJQUNuRCxHQUFHLGNBQWM7SUFDakIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUcsRUFBZSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7Q0FDOUUsQ0FBQyJ9