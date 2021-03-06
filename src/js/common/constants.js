// @flow

const PHASE = {
    FANTASY_DRAFT: -1,
    PRESEASON: 0,
    REGULAR_SEASON: 1,
    AFTER_TRADE_DEADLINE: 2,
    PLAYOFFS: 3,
    BEFORE_DRAFT: 4,
    DRAFT: 5,
    AFTER_DRAFT: 6,
    RESIGN_PLAYERS: 7,
    FREE_AGENCY: 8,
};

const PLAYER = {
    FREE_AGENT: -1,
    UNDRAFTED: -2,
    RETIRED: -3,
    UNDRAFTED_2: -4, // Next year's draft class
    UNDRAFTED_3: -5, // Next next year's draft class
    UNDRAFTED_FANTASY_TEMP: -6, // Store current draft class here during fantasy draft
};

const PHASE_TEXT = {
    '-1': 'fantasy draft',
    '0': 'preseason',
    '1': 'regular season',
    '2': 'regular season',
    '3': 'playoffs',
    '4': 'before draft',
    '5': 'draft',
    '6': 'after draft',
    '7': 're-sign players',
    '8': 'free agency',
};

const SPORT = 'basketball'; // For account ajax stuff

const COMPOSITE_WEIGHTS = {
    pace: {
        ratings: ['spd', 'jmp', 'dnk', 'tp', 'stl', 'drb', 'pss'],
    },
    usage: {
        ratings: ['ins', 'dnk', 'fg', 'tp', 'spd', 'drb'],
        weights: [1.5, 1, 1, 1, 0.15, 0.15],
    },
    dribbling: {
        ratings: ['drb', 'spd'],
    },
    passing: {
        ratings: ['drb', 'pss'],
        weights: [0.4, 1],
    },
    turnovers: {
        ratings: ['drb', 'pss', 'spd', 'hgt', 'ins'],
        weights: [1, 1, -1, 1, 1],
    },
    shootingAtRim: {
        ratings: ['hgt', 'spd', 'jmp', 'dnk'],
        weights: [1, 0.2, 0.6, 0.4],
    },
    shootingLowPost: {
        ratings: ['hgt', 'stre', 'spd', 'ins'],
        weights: [1, 0.6, 0.2, 1],
    },
    shootingMidRange: {
        ratings: ['hgt', 'fg'],
        weights: [0.2, 1],
    },
    shootingThreePointer: {
        ratings: ['hgt', 'tp'],
        weights: [0.2, 1],
    },
    shootingFT: {
        ratings: ['ft'],
    },
    rebounding: {
        ratings: ['hgt', 'stre', 'jmp', 'reb'],
        weights: [1.5, 0.1, 0.1, 0.7],
    },
    stealing: {
        ratings: [50, 'spd', 'stl'],
        weights: [1, 1, 1],
    },
    blocking: {
        ratings: ['hgt', 'jmp', 'blk'],
        weights: [1.5, 0.5, 0.5],
    },
    fouling: {
        ratings: [50, 'hgt', 'blk', 'spd'],
        weights: [1.5, 1, 1, -1],
    },
    defense: {
        ratings: ['hgt', 'stre', 'spd', 'jmp', 'blk', 'stl'],
        weights: [1, 1, 1, 0.5, 1, 1],
    },
    defenseInterior: {
        ratings: ['hgt', 'stre', 'spd', 'jmp', 'blk'],
        weights: [2, 1, 0.5, 0.5, 1],
    },
    defensePerimeter: {
        ratings: ['hgt', 'stre', 'spd', 'jmp', 'stl'],
        weights: [1, 1, 2, 0.5, 1],
    },
    endurance: {
        ratings: [50, 'endu', 'hgt'],
        weights: [1, 1, -0.1],
    },
    athleticism: {
        ratings: ['stre', 'spd', 'jmp', 'hgt'],
        weights: [1, 1, 1, 0.5],
    },
};

// Test: pk_test_gFqvUZCI8RgSl5KMIYTmZ5yI
const STRIPE_PUBLISHABLE_KEY = 'pk_live_Dmo7Vs6uSaoYHrFngr4lM0sa';

export {
    COMPOSITE_WEIGHTS,
    PHASE,
    PLAYER,
    PHASE_TEXT,
    SPORT,
    STRIPE_PUBLISHABLE_KEY,
};
