export declare enum Genre {
    Test = "test",
    Indie = "indie",
    Dubstep = "dubstep",
    Metal = "metal",
    All = "all"
}
export declare function isGenre(str: string): str is Genre;
export declare const templates: {
    [g in Genre]: string[];
};
