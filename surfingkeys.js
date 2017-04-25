// --- General settings ---

settings.hintAlign = "left";
settings.startToShowEmoji = 1;
settings.scrollStepSize = 120; // faster 'jk' scrolling
Hints.characters = 'aoeuidhtnspyfgcrl'; // all Dvorak first and second row alphabetic characters



// --- Own mappings ---

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
map('J', 'E');
map('K', 'R');

// Tab history management
map('h', 'S');
unmap('S');

map('l', 'D');
unmap('D');

// Search with space
map('<Space>', '/');



// --- Unmap unused commands to prevent confusion and noise ---

// Help
unmap('sql');

// Mouse Click
unmap(';m');

// Tabs
unmap('g0');
unmap('g$');
unmap('gx0');
unmap('gxt');
unmap('gxT');
unmap('gx$');
unmap('E');
unmap('R');
unmap('<Alt-p>');
unmap('on');
unmap('W');

// Page Navigation
unmap('gT');
unmap('gt');
unmap('g?');
unmap('B');
unmap('F');

// Search selected with
unmap('sd');
unmap('sb');
unmap('sw');
unmap('ss');
unmap('sh');

// Clipboard
unmap(';p');

// Chrome URLs
unmap(';j');
unmap('si');
unmap('ga');
unmap('gc');
unmap('gk');
unmap('gn');

// Proxy
unmap('cp');
unmap(';cp');
unmap(';ap');
unmap('spa');
unmap('spb');
unmap('sps');
unmap('spc');
unmap('spi');
unmap('spd');
unmap('sfr');

// Misc
unmap(';q');

// Insert mode
iunmap('<Ctrl-f>');
iunmap('<Alt-b>');
iunmap('<Alt-f>');
iunmap('<Alt-w>');
iunmap('<Alt-d>');
iunmap("<Ctrl-'>");
