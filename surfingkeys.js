const {
    aceVimMap,
    mapkey,
    imap,
    imapkey,
    getClickableElements,
    vmapkey,
    map,
    iunmap,
    unmap,
    unmapAllExcept,
    vunmap,
    cmap,
    addSearchAlias,
    removeSearchAlias,
    tabOpenLink,
    readText,
    Clipboard,
    Front,
    Hints,
    Visual,
    RUNTIME
} = api;

// ================ General settings ================
settings.hintAlign = "left";
settings.startToShowEmoji = 1;
settings.scrollStepSize = 120; // faster 'jk' scrolling
Hints.characters = 'aoeuidhtnspyfgcrl'; // all Dvorak first and second row alphabetic characters

iunmap(":");
unmap("/"); // quick search
unmap('r');

// ================ Own mappings ================
map('u', 'f'); // open link
map('U', 'gf'); // open link in new tab

map('p', 'cc'); // 'paste' = open link from clipboard

map('J', 'd'); // fast scroll down
map('K', 'e'); // fast scroll up

// --- Tabs
map('h', 'S'); // previous tab
map('l', 'D'); // next tab

map('<', 'E'); // previous tab
map('>', 'R'); // next tab
