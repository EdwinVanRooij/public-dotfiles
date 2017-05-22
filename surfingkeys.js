// --- General settings ---
// todo: make a 'cu' for q (image click), open in non-active new tab

settings.hintAlign = "left";
settings.startToShowEmoji = 1;
settings.scrollStepSize = 120; // faster 'jk' scrolling
Hints.characters = 'aoeuidhtnspyfgcrl'; // all Dvorak first and second row alphabetic characters



// --- Own mappings ---

// VIM editor mappings
aceVimMap('nh', '<Esc>', 'insert');
aceVimMap('<Space>c', 'ciw', 'normal');
aceVimMap('H', '0', 'normal');
aceVimMap('L', '$', 'normal');

// Open links
map('u', 'f');
unmap('f');

map('U', 'af');
unmap('af');

map('gu', 'gf');
unmap('gf');

map('cu', 'cf');
unmap('cf');

map('cc', 'p'); // 'paste' = open link from clipboard

// More natural previous/back navigation
unmap('>>');
unmap('<<');
map('>', ']]');
map('<', '[[');
unmap('[[');
unmap(']]');

// More confortable tab movement
map('<', 'E');
map('>', 'R');

map('J', 'd');
map('K', 'e');

// Tab history management
map('h', 'S');
unmap('S');

map('l', 'D');
unmap('D');

// Search with space
map('<Space>', '/');



// --- Exceptions ---
// todo: 9gag jk movement
// todo; make shift+enter in t google for result instead of selected
