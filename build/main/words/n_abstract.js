"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// abstract nouns
// from http://www.englishbanana.com/list-of-common-abstract-nouns-ig3.pdf
exports.n_abstract = [
    "ability",
    "adoration",
    "adventure",
    "amazement",
    "anger",
    "anxiety",
    "apprehension",
    "artistry",
    "awe",
    "beauty",
    "belief",
    "bravery",
    "brutality",
    "calm",
    "chaos",
    "charity",
    "childhood",
    "clarity",
    "coldness",
    "comfort",
    "communication",
    "compassion",
    "confidence",
    "contentment",
    "courage",
    "crime",
    "curiosity",
    "death",
    "deceit",
    "dedication",
    "defeat",
    "delight",
    "democracy",
    "despair",
    "determination",
    "dexterity",
    "dictatorship",
    "disappointment",
    "disbelief",
    "disquiet",
    "disturbance",
    "education",
    "ego",
    "elegance",
    "energy",
    "enhancement",
    "enthusiasm",
    "envy",
    "evil",
    "excitement",
    "failure",
    "faith",
    "faithfulness",
    "faithlessness",
    "fascination",
    "favouritism",
    "fear",
    "forgiveness",
    "fragility",
    "frailty",
    "freedom",
    "friendship",
    "generosity",
    "goodness",
    "gossip",
    "grace",
    "graciousness",
    "grief",
    "happiness",
    "hate",
    "hatred",
    "hearsay",
    "helpfulness",
    "helplessness",
    "homelessness",
    "honesty",
    "honour",
    "hope",
    "humility",
    "humour",
    "hurt",
    "idea",
    "idiosyncrasy",
    "imagination",
    "impression",
    "improvement",
    "infatuation",
    "inflation",
    "insanity",
    "intelligence",
    "jealousy",
    "joy",
    "justice",
    "kindness",
    "knowledge",
    "laughter",
    "law",
    "liberty",
    "life",
    "loss",
    "love",
    "loyalty",
    "luck",
    "luxury",
    "maturity",
    "memory",
    "mercy",
    "motivation",
    "movement",
    "music",
    "need",
    "omen",
    "opinion",
    "opportunism",
    "opportunity",
    "pain",
    "patience",
    "peace",
    "peculiarity",
    "perseverance",
    "pleasure",
    "poverty",
    "power",
    "pride",
    "principle",
    "reality",
    "redemption",
    "refreshment",
    "relaxation",
    "relief",
    "restoration",
    "riches",
    "romance",
    "rumour",
    "sacrifice",
    "sadness",
    "sanity",
    "satisfaction",
    "self-control",
    "sensitivity",
    "service",
    "shock",
    "silliness",
    "skill",
    "slavery",
    "sleep",
    "sophistication",
    "sorrow",
    "sparkle",
    "speculation",
    "speed",
    "strength",
    "strictness",
    "stupidity",
    "submission",
    "success",
    "surprise",
    "sympathy",
    "talent",
    "thrill",
    "tiredness",
    "tolerance",
    "trust",
    "uncertainty",
    "unemployment",
    "unreality",
    "victory",
    "wariness",
    "warmth",
    "weakness",
    "wealth",
    "weariness",
    "wisdom",
    "wit",
    "worry",
    "health",
    "virtue"
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibl9hYnN0cmFjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93b3Jkcy9uX2Fic3RyYWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUJBQWlCO0FBQ2pCLDBFQUEwRTtBQUM3RCxRQUFBLFVBQVUsR0FBRztJQUN0QixTQUFTO0lBQ1QsV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXO0lBQ1gsT0FBTztJQUNQLFNBQVM7SUFDVCxjQUFjO0lBQ2QsVUFBVTtJQUNWLEtBQUs7SUFDTCxRQUFRO0lBQ1IsUUFBUTtJQUNSLFNBQVM7SUFDVCxXQUFXO0lBQ1gsTUFBTTtJQUNOLE9BQU87SUFDUCxTQUFTO0lBQ1QsV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztJQUNULGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixTQUFTO0lBQ1QsT0FBTztJQUNQLFdBQVc7SUFDWCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7SUFDWixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxTQUFTO0lBQ1QsZUFBZTtJQUNmLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsYUFBYTtJQUNiLFdBQVc7SUFDWCxLQUFLO0lBQ0wsVUFBVTtJQUNWLFFBQVE7SUFDUixhQUFhO0lBQ2IsWUFBWTtJQUNaLE1BQU07SUFDTixNQUFNO0lBQ04sWUFBWTtJQUNaLFNBQVM7SUFDVCxPQUFPO0lBQ1AsY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2IsYUFBYTtJQUNiLE1BQU07SUFDTixhQUFhO0lBQ2IsV0FBVztJQUNYLFNBQVM7SUFDVCxTQUFTO0lBQ1QsWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0lBQ1YsUUFBUTtJQUNSLE9BQU87SUFDUCxjQUFjO0lBQ2QsT0FBTztJQUNQLFdBQVc7SUFDWCxNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxhQUFhO0lBQ2IsY0FBYztJQUNkLGNBQWM7SUFDZCxTQUFTO0lBQ1QsUUFBUTtJQUNSLE1BQU07SUFDTixVQUFVO0lBQ1YsUUFBUTtJQUNSLE1BQU07SUFDTixNQUFNO0lBQ04sY0FBYztJQUNkLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixXQUFXO0lBQ1gsVUFBVTtJQUNWLGNBQWM7SUFDZCxVQUFVO0lBQ1YsS0FBSztJQUNMLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7SUFDVixLQUFLO0lBQ0wsU0FBUztJQUNULE1BQU07SUFDTixNQUFNO0lBQ04sTUFBTTtJQUNOLFNBQVM7SUFDVCxNQUFNO0lBQ04sUUFBUTtJQUNSLFVBQVU7SUFDVixRQUFRO0lBQ1IsT0FBTztJQUNQLFlBQVk7SUFDWixVQUFVO0lBQ1YsT0FBTztJQUNQLE1BQU07SUFDTixNQUFNO0lBQ04sU0FBUztJQUNULGFBQWE7SUFDYixhQUFhO0lBQ2IsTUFBTTtJQUNOLFVBQVU7SUFDVixPQUFPO0lBQ1AsYUFBYTtJQUNiLGNBQWM7SUFDZCxVQUFVO0lBQ1YsU0FBUztJQUNULE9BQU87SUFDUCxPQUFPO0lBQ1AsV0FBVztJQUNYLFNBQVM7SUFDVCxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixRQUFRO0lBQ1IsYUFBYTtJQUNiLFFBQVE7SUFDUixTQUFTO0lBQ1QsUUFBUTtJQUNSLFdBQVc7SUFDWCxTQUFTO0lBQ1QsUUFBUTtJQUNSLGNBQWM7SUFDZCxjQUFjO0lBQ2QsYUFBYTtJQUNiLFNBQVM7SUFDVCxPQUFPO0lBQ1AsV0FBVztJQUNYLE9BQU87SUFDUCxTQUFTO0lBQ1QsT0FBTztJQUNQLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsU0FBUztJQUNULGFBQWE7SUFDYixPQUFPO0lBQ1AsVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0lBQ1YsVUFBVTtJQUNWLFFBQVE7SUFDUixRQUFRO0lBQ1IsV0FBVztJQUNYLFdBQVc7SUFDWCxPQUFPO0lBQ1AsYUFBYTtJQUNiLGNBQWM7SUFDZCxXQUFXO0lBQ1gsU0FBUztJQUNULFVBQVU7SUFDVixRQUFRO0lBQ1IsVUFBVTtJQUNWLFFBQVE7SUFDUixXQUFXO0lBQ1gsUUFBUTtJQUNSLEtBQUs7SUFDTCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFFBQVE7Q0FDWCxDQUFDIn0=