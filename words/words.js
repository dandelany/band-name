var words = {
    n_abstract:         require('./n_abstract.js').data,
    n_animal:           require('./n_animal.js').data,
    n_dark:             require('./n_dark.js').data, // dark metal nouns
    n_group:            require('./n_group.js').data,
    n_groupgangsta:     require('./n_groupgangsta.js').data, // gangsta group names
    n_mythcreature:     require('./n_mythcreature.js').data,

    adj_personality:    require('./adj_personality.js').data,
    adj_color:          require('./adj_color.js').data,
    adj_dark:           require('./adj_dark.js').data,

    name_first:         require('./name_first.js').data,

    prefix_dubstep:     require('./prefix_dubstep.js').data,
    prefix_rap:         require('./prefix_rap.js').data,

    suffix:             require('./suffix.js').data
};

if( typeof module !== "undefined" && ('exports' in module)) {
    module.exports	= words;
}