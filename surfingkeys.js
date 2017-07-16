// ================ General settings ================
// todo: make a 'cu' for q (image click), open in non-active new tab

settings.hintAlign = "left";
settings.startToShowEmoji = 1;
settings.scrollStepSize = 120; // faster 'jk' scrolling
Hints.characters = 'aoeuidhtnspyfgcrl'; // all Dvorak first and second row alphabetic characters

iunmap(":");

// ================ Own mappings ================

// VIM editor mappings
aceVimMap('<Space>c', 'ciw', 'normal');
aceVimMap('H', '0', 'normal');
aceVimMap('L', '$', 'normal');

// Tab deletion
unmap('gd');
map('gtd', 'gd');

map('gdh', 'gxt');
map('gdl', 'gxT');

map('gdH', 'gx0');
map('gdL', 'gx$');

// Zoom options
map('-', 'zo');
map('+', 'zi');

// Open links
map('u', 'f');
map('gu', 'af');
map('U', 'gf');

map('Y', 'yy');
map('p', 'cc'); // 'paste' = open link from clipboard

// Tab movement
map('<', 'E');
map('>', 'R');

map('J', 'd');
map('K', 'e');

// Tab history management
map('h', 'S');
map('l', 'D');

// Search with space
map('S', '/');



// ================ Exceptions ================
// todo: 9gag jk movement
// todo; make shift+enter in t google for result instead of selected
