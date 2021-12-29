// ================ General settings ================
// todo: make a 'cu' for q (image click), open in non-active new tab

settings.hintAlign = "left";
settings.startToShowEmoji = 1;
settings.scrollStepSize = 120; // faster 'jk' scrolling
api.Hints.characters = 'aoeuidhtnspyfgcrl'; // all Dvorak first and second row alphabetic characters

api.iunmap(":");

// ================ Own mappings ================

// Tab deletion
api.map('-', 'zo');
api.map('+', 'zi');

// Open links
api.map('u', 'f');
api.map('U', 'gf');

api.map('p', 'cc'); // 'paste' = open link from clipboard

api.map('<', 'E');
api.map('>', 'R');

api.map('J', 'd');
api.map('K', 'e');

// Tab history management
api.map('h', 'S');
api.map('l', 'D');

api.unmap('r');
