// TEAM DATA
const teams = [
    {
        id: "payong-brothers",
        rank: 1,
        name: "Payong Brothers",
        wins: 3,
        losses: 0,
        streak: "W1",
        logo: "images/payong.jpg",
        roster: [
            // Add your roster here in this format:
            // { number: "23", name: "John Doe", position: "Guard" },
            // { number: "10", name: "Jane Smith", position: "Forward" },
        ]
    },
    {
        id: "wasalak",
        rank: 2,
        name: "Wasalak",
        wins: 3,
        losses: 0,
        streak: "W1",
        logo: "images/alak.jpg",
        roster: []
    },
    {
        id: "thirdy",
        rank: 3,
        name: "Thirdy",
        wins: 2,
        losses: 0,
        streak: "W2",
        logo: "images/thirdy.jpg",
        roster: [
            { number: "9", name: "De Jesus", position: "NA", image: "images/players/eric.jpg" },
            { number: "91", name: "Tejones", position: "NA", image: "images/players/tejo.jpg"},
            { number: "24", name: "Labuyo", position: "NA", image: "images/players/labu.jpg"},
            { number: "10", name: "Villanueva", position: "NA", image: "images/players/ley.jpg"},
            { number: "45", name: "Gavine", position: "NA", image: "images/players/gav.jpg"},
            { number: "16", name: "Bere", position: "NA", image: "images/players/lex.jpg"},
            { number: "1", name: "Pacheco", position: "NA", image: "images/players/pache.jpg"},
            { number: "28", name: "Casim", position: "NA", image: "images/players/mat.jpg"},
            { number: "26", name: "Guoin", position: "NA", image: "images/players/ter.jpg"},
            { number: "15", name: "Montalbo", position: "NA", image: "images/players/monta.jpg"},
            { number: "0", name: "Bere", position: "NA", image: "images/players/ber.jpg" },
            { number: "21", name: "Gavine", position: "NA", image: "images/players/ber.jpg"},
            { number: "3", name: "Alpapara", position: "NA", image: "images/players/alpapa.jpg" },
            { number: "10", name: "Castor", position: "NA", image: "images/players/ber.jpg"},
            { number: "27", name: "Montealto", position: "NA", image: "images/players/monte.jpg" },
            { number: "4", name: "Guion", position: "NA", image: "images/players/toy.jpg" },
            { number: "00", name: "Cabiltes", position: "Free Agent", image: "images/players/ber.jpg" },

        ]
    },
    {
        id: "slasher",
        rank: 4,
        name: "Slasher",
        wins: 2,
        losses: 1,
        streak: "L1",
        logo: "images/slasher.jpg",
        roster: []
    },
    {
        id: "annex-ii",
        rank: 5,
        name: "Annex II",
        wins: 1,
        losses: 1,
        streak: "L1",
        logo: "images/annex.jpg",
        roster: []
    },
    {
        id: "alak-pa-more",
        rank: 6,
        name: "Alak Pa More",
        wins: 1,
        losses: 1,
        streak: "W1",
        logo: "images/alak pa more.jpg",
        roster: []
    },
    {
        id: "mix-blood",
        rank: 7,
        name: "Mix Blood",
        wins: 1,
        losses: 2,
        streak: "L1",
        logo: "images/bllod.jpg",
        roster: []
    },
    {
        id: "eldorado",
        rank: 8,
        name: "Eldorado",
        wins: 0,
        losses: 2,
        streak: "L2",
        logo: "images/eldo.jpg",
        roster: []
    },
    {
        id: "underrated",
        rank: 9,
        name: "Underrated",
        wins: 0,
        losses: 2,
        streak: "L2",
        logo: "images/under.jpg",
        roster: []
    },
    {
        id: "dleague",
        rank: 10,
        name: "D'League",
        wins: 0,
        losses: 1,
        streak: "L1",
        logo: "images/dalig.jpg",
        roster: []
    },
    {
        id: "bombateros",
        rank: 11,
        name: "Bombateros",
        wins: 0,
        losses: 3,
        streak: "L3",
        logo: "images/bomba.jpg",
        roster: []
    },
];

// SCHEDULE DATA
const schedule = [
    // Add your games here in this format:
     {
         date: "2025-10-25",
         Venue: "Terraza Village",
         time: "10:00 AM",
         team1: "wasalak",          // Use team id
         team2: "slasher",          // Use team id
         score1: "",                  // Leave empty for upcoming games
         score2: "",                  // Leave empty for upcoming games
         status: "upcoming"        // "completed", "upcoming", or "live"
     },

     {
         date: "2025-10-25",
         Venue: "Terraza Village",
         time:  "11:15 AM",
         team1: "eldorado",          // Use team id
         team2: "bombateros",          // Use team id
         score1: "",                  // Leave empty for upcoming games
         score2: "",                  // Leave empty for upcoming games
         status: "upcoming"        // "completed", "upcoming", or "live"
     },

     {
         date: "2025-10-25",
         Venue: "Terraza Village",
         time:  "12:30 PM",
         team1: "mix-blood",          // Use team id
         team2: "annex-ii",          // Use team id
         score1: "",                  // Leave empty for upcoming games
         score2: "",                  // Leave empty for upcoming games
         status: "upcoming"        // "completed", "upcoming", or "live"
     },

     {
         date: "2025-10-25",
         Venue: "Terraza Village",
         time: "1:45 PM",
         team1: "payong-brothers",          // Use team id
         team2: "thirdy",          // Use team id
         score1: "",                  // Leave empty for upcoming games
         score2: "",                  // Leave empty for upcoming games
         status: "upcoming"        // "completed", "upcoming", or "live"
     },

     {
         date: "2025-10-25",
         Venue: "Terraza Village",
         time: "3 PM",
         team1: "alak-pa-more",          // Use team id
         team2: "dleague",          // Use team id
         score1: "",                  // Leave empty for upcoming games
         score2: "",                  // Leave empty for upcoming games
         status: "upcoming"        // "completed", "upcoming", or "live"
     },
     
];

// Helper function to get team by id
function getTeamById(id) {
    return teams.find(team => team.id === id);
}