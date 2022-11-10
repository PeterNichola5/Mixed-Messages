//Mixed Messages Portfolio Project for Codecademy.  Generates random 'joke' on each run of the program

const targets = ['monkey', 'man', 'elephant', 'car', 'toad', 'frog', 'mouse', 'rat', 'cow', 'pencil', 'notebook', 'window', 'elevator', 'tow truck',
               'AC unit', 'bear', 'building', 'jackhammer', 'TV', 'cabinet', 'scurge of the Earth', 'Satan himself', 'Jimbo Swackhammer', 
               'Lebron James', 'John Cena', 'Dwane "The Rock" Johnson', 'room full of hungry seagulls', 'alcoholic', 'incel', 'scammer', 'gays'];
const punchLines = ["Your NOUN is ADJ!", "Is your NOUN running?", "I sure am glad that you aren't ADJ.", "How are you doing, ADJ NOUN?", "Nothing!",
                "Wouldn't /you/ like to know", "You smell as ADJ as a NOUN!", "I forgor :/", "Is that a NOUN, or are you just happy to see me?",
                "Im ADJ!", "Ur mom.", "Well helloooooo NOUN.", "Peel me.", "NOUNs, amiright?", "Ypu're as ADJ as a NOUN. No offense."];
const nouns = ['refrigerator', 'banana', 'nut sack', 'wenis', 'doornob', 'Ford F150', 'peach cobbler', 'weiner dog', 'Walmart parking lot',
               'trash can', 'mom', 'piss stream', 'picture frame', 'Markiplier Let\'s Play series', 'dukie', 'Jar of Marmalade', 'email',
               'wringworm', 'dung beetle', 'litter box', 'banana', 'brick'];
const adjs = ['stinky', 'smelly', 'sexy', 'scrumptious', 'stupid', 'pretty', 'slow', 'nerdy', 'gunky', 'colorful', 'horrendous', 'malnurished',
              'lame', 'daft', 'dense', 'boring', 'soul-sucking', 'lifeless', 'kinky', 'cool', 'deranged', 'flat', 'dumb', 'down right stupid',
              'observant', 'invisible', 'nasty', 'loving', 'caring', 'kind', 'happy','determined', 'dull', 'dim-witted', 'hopeless'];
const targetLength = targets.length;
const punchLineLength = punchLines.length;
const nounLength = nouns.length;
const adjLength = adjs.length;
