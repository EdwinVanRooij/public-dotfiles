// ================ General settings ================
settings.hintAlign = "left";
settings.scrollStepSize = 120; // faster 'jk' scrolling
api.Hints.setCharacters('aoeuidhtnspyfgcrl'); // all Dvorak first and second row alphabetic characters

api.iunmap(":");
api.unmap("/"); // quick search
api.unmap('r');

// ================ Own mappings ================
api.map('u', 'f'); // open link
api.map('U', 'gf'); // open link in new tab

api.map('p', 'cc'); // 'paste' = open link from clipboard

api.map('J', 'd'); // fast scroll down
api.map('K', 'e'); // fast scroll up

// --- Tabs
api.map('h', 'S'); // previous tab
api.map('l', 'D'); // next tab

api.map('<', 'E'); // previous tab
api.map('>', 'R'); // next tab
