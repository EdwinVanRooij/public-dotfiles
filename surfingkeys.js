// ================ General settings ================
// todo: make a 'cu' for q (image click), open in non-active new tab

settings.hintAlign = "left";
settings.startToShowEmoji = 1;
settings.scrollStepSize = 120; // faster 'jk' scrolling
Hints.characters = 'aoeuidhtnspyfgcrl'; // all Dvorak first and second row alphabetic characters



// ================ Own mappings ================

// VIM editor mappings
aceVimMap('<Space>c', 'ciw', 'normal');
aceVimMap('H', '0', 'normal');
aceVimMap('L', '$', 'normal');

// Open links
map('u', 'f');
map('U', 'af');

map('gu', 'U');
map('gu', 'gf');

map('cu', 'cf');
map('cc', 'p'); // 'paste' = open link from clipboard

// More natural previous/back navigation
map('>', ']]');
map('<', '[[');

// More confortable tab movement
map('<', 'E');
map('>', 'R');

map('J', 'd');
map('K', 'e');

// Tab history management
map('h', 'S');
map('l', 'D');

// Search with space
map('<Space><Space>', '/');



// ================ Exceptions ================
// todo: 9gag jk movement
// todo; make shift+enter in t google for result instead of selected
