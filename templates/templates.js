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

if( typeof module !== "undefined" && ('exports' in module)) {
    module.exports	= templates;
}