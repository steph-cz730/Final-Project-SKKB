const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
state = {}
showTextNode(1)
}

function showTextNode(textNodeIndex) {
const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
textElement.innerText = textNode.text

updateEmoji(textNode);

while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
}

textNode.options.forEach(option => {
    if (showOption(option)) {
    const button = document.createElement('button')
    button.innerText = option.text
    button.classList.add('btn')
    button.addEventListener('click', () => selectOption(option))
    optionButtonsElement.appendChild(button)
    }
});
}

function updateEmoji(textNode) {
    const emojiContainer = document.getElementById('emoji-container');


emojiContainer.innerHTML = '';

switch (textNode.id) {
    case 2:
        emojiContainer.innerHTML = '🏡';
        break;
    case 3:
        emojiContainer.innerHTML = '🐺';
        break;
    case 4:
        emojiContainer.innerHTML = '🏞️';
        break;
    case 5:
        emojiContainer.innerHTML = '🐺' + '🌼';
        break;
    case 6:
        emojiContainer.innerHTML = '🏡';
        break;
    case 7:
        emojiContainer.innerHTML = '👵';
        break;
    case 8:
        emojiContainer.innerHTML = '🌼' + '🐸' + '🦋';
        break;
    case 9:
        emojiContainer.innerHTML = '🏡';
        break;
    case 10:
        emojiContainer.innerHTML = '🐺' + '👵';
        break;
    case 11:
        emojiContainer.innerHTML = '🏡';
        break;
    case 12:
        emojiContainer.innerHTML = '🐺' + '🧺';
        break;
    case 13:
        emojiContainer.innerHTML = '🥊' + '🐺';
        break;
    case 14:
        emojiContainer.innerHTML = '👨‍🌾' + '🐺';
        break;
    case 15:
        emojiContainer.innerHTML = '👨‍🌾' + '🐺';
        break;
    case 16:
        emojiContainer.innerHTML = '👨‍🌾' + '🐺';
        break;
    case 17:
        emojiContainer.innerHTML = '👨‍🌾' + '🐺';
        break;
    case 18:
        emojiContainer.innerHTML = '🐺';
        break;
    case 19:
        emojiContainer.innerHTML = '👵' + '🏡';
        break;
    case 20:
        emojiContainer.innerHTML = '🐺';
        break;
    case 21:
        emojiContainer.innerHTML = '🌺' + '🧺';
        break;
    case 22:
        emojiContainer.innerHTML = '🐸' + '🧺';
        break;
    case 23:
        emojiContainer.innerHTML = '🏞️';
        break;
    case 24:
        emojiContainer.innerHTML = '👵';
        break;
    case 25:
        emojiContainer.innerHTML = '👵';
        break;
    case 26:
        emojiContainer.innerHTML = '🐺';
        break;
    case 27:
        emojiContainer.innerHTML = '🐺';
        break;
    case 28:
        emojiContainer.innerHTML = '🧺' + '🌺' + '🐺';
        break;
    case 29:
        emojiContainer.innerHTML = '🐺';
        break;
    case 30:
        emojiContainer.innerHTML = '🧺' + '🐸' + '🐺';
        break;
    case 31:
        emojiContainer.innerHTML = '👵';
        break;

    default:
        break;
}
}

function showOption(option) {
return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
const nextTextNodeId = option.nextText
if (nextTextNodeId <= 0) {
    return startGame()
}
state = Object.assign(state, option.setState)
showTextNode(nextTextNodeId)
}

const textNodes = [
{
    id: 1,
    text: 'In this game you (the player) are tasked with making your way to your grandmothers cottage to make her feel better! You will have to make tough choices along the way that will alter how things turn out. Choose wisely, Good luck!',
    options: [
    {
        text: 'Begin',
        setState: { begin: true },
        nextText: 2
},
]
},

{
    id: 2,
    text: 'Your mother calls out to you from the kitchen, requesting that you come downstairs to talk. She informs you that your grandmother has been terribly ill as of late and wants you to visit her. Your mother has prepared a basket of goodies that she believes will help! Your grandmother lives a little ways off, through the woods, in a small cottage. You must leave right away!',
    options: [
    {
        text: 'Head outside',
        requiredState: (currentState) => currentState.begin,
        setState: { leaveRoom: true},
        nextText: 3
    },
    ]
},

{
    id: 3,
    text: 'As you leave home and begin your journey, you hear all manner of forest creatures and even see some darting through the trees. The sun is shining bright overhead and you consider how nice the gentle breeze feels. Suddenly, a tall and imposing wolf appears in front of you. As he goes to speak to you, you...',
    options: [
    {
        text: 'Ignore the wolf and run away, sticking to the path that leads to grandmothers cottage',
        nextText: 4
    },
    {
        text: 'Greet him and start a conversation. The journey has been kind of boring until now!',
        nextText: 5
    },
    {
        text: 'See him as a threat and offer up your basket in the hopes he will just take it and leave.',
        nextText: 6
    }
    ]
},

{
    id: 4,
    text: 'You intently stare at the wolf as you make your way back to the path. After walking for what feels like an eternity, you finally arrive at grandmothers cottage and knock on the front door.',
    options: [
    {
        text: 'Knock, knock',
        nextText: 7
    }
    ]
},

{
    id: 5,
    text: 'You and the wolf begin talking like old friends. Lost in conversation, he leads you from the path, deeper into the woods. Before you know it, you are standing right in front of a beautiful meadow!',

    options: [
        {
        text: 'Go to the meadow',
        nextText: 8   
    }
]
},

{
    id: 6,
    text: 'You soon arrive at grandmothers cottage, a little down for giving her basket to that dang wolf. You hope that your presence will be enough! You knock on the door...',
    options: [
    {
        text: 'Knock, knock',
        nextText: 9
    }
    ]
},

{
    id: 7,
    text: 'Your grandmother calls out to you, asking you to come inside. You hear her voice but it sounds a bit off. You wonder if its due to her not feeling well.',
    options: [
    {
        text: 'Screw this, do NOT go inside!',
        nextText: 10
    },
    {
        text: 'Go Inside',
        nextText: 11
    },
    ]
},

{
    id: 8,
    text: 'You see beautiful flowers, butterflies, frogs and other small creatures moving about blissfully.',
    options: [
    {
        text: 'Pick some lilies',
        nextText: 21
    },
    {
        text: 'Pick up a frog',
        nextText: 22
    },
    {
        text: 'Admire the view',
        nextText: 23
    }
    ]
},

{
    id: 9,
    text: 'Your grandmother calls out to you, asking you to come inside. You hear her voice but it sounds a bit off. You wonder if its due to her not feeling well.',
    options: [
    {
        text: 'Screw this, do NOT go inside!',
        nextText: 18
    },
    {
        text: 'Go inside',
        nextText: 19
    }
    ]
},

{
    id: 10,
    text: 'Noticing the change in grandmothers voice, you take a brief moment to think about going inside and decide against it. Just as you turn to leave, a large figure opens the door! Its the wolf you saw on the path! You try to run but your knees buckle! The wolf gobbles you up before they even hit the ground... surely grandmother is next..',
    options: [
    {
        text: 'Well, you died... Play again?',
        nextText: -1
    }
    ]
},

{
    id: 11,
    text: 'Upon entering the cottage, you notice that your grandmother does not look like herself at all! Long ears, a long nose and yellow eyes stare back at you under one of grandmothers nightgowns, but that is not grandmother!',
    options: [
    {
        text: 'Run away!',
        nextText: 12
    },
    {
        text: 'Stand and fight!',
        nextText: 13
    },
    {
        text: 'Scream for help!',
        nextText: 14
    }
    ]
},

{
    id: 12,
    text: 'You drop the basket and run out of the cottage. The wolf takes a moment to smell the contents of the basket, giving you time to flee. You make it home and tell mother what happened. Terrified that the wolf may have followed you home, your mother begins to pack for the city...',
    options: [
    {
        text: 'Poor grandmother, she has surely been eaten! Play again?',
        nextText: -1
    }
    ]
},

{
    id: 13,
    text: 'You square up with the wolf and with all your might you hit him in the stomach. Stunned from the blow, he folds over and spits grandmother up in the process! He runs from the cottage, towards the woods, to tend to his aching stomach. Grandmother, grateful for the rescue, asks you to stay and enjoy the basket with her. You of course agree.',
    options: [
    {
        text: 'Congratulations, you saved grandmother from that dang wolf! Play again?',
        nextText: -1
    }
    ]
},

{
    id: 14,
    text: 'You let out a high pitched, ear piercing scream! Nearby, a woodsman hears the blood curdling scream and runs over to lend a hand. He bursts into the cottage, breathing heavily from is run...',
    options: [
    {
        text: 'Assist the woodsman',
        nextText: 15
    },
    {
        text: 'Stand back and watch',
        nextText: 16
    },
    {
        text: 'Run away!',
        nextText: 17
    }
    ]
},

{
    id: 15,
    text: 'You and the woodsman jump into action! With the woodsman overtaking the wolf, you are able to land a punch to his stomach. Suddenly, the wolf spits out grandmother and passes out! The woodsman wishes you and your grandmother well and offers to take the wolf with him back to the woods. You agree and watch them disappear into the trees. Grandmother, relieved to be free from the wolfs stomach, asks you to stay and enjoy the basket with her. You of course agree.',
    options: [
    {
        text: 'Congratulations, you and the woodsman saved grandmother from that dang wolf! Play again?',
        nextText: -1
    }
    ]
},

{
    id: 16,
    text: 'You watch the woodsman expertly take down the wolf. He starts with a fierce kick to his stomach and grandmother comes flying out! The wolf passes out and the woodsman drags him off, back to the woods. He wishes you and your grandmother well as you watch him fade into the trees. You and grandmother are free to enjoy the wonderful basket of goodies!',
    options: [
    {
        text: 'Congratulations, your screams ended up saving grandmother! Play again?',
        nextText: -1
    }
    ]
},

{
    id: 17,
    text: 'Frightened by both the wolf and the strange woodsman, you dart out of the cottage and make your way home. The woodsman, puzzled by your sudden desire to flee, is defenseless! And the wolf, never missing an opportunity to eat, decides to eat the woodman instead! The wolf vows to find and eat you next...',
    options: [
    {
        text: 'You saved yourself, but the poor woodsman got eaten in your place! And grandmother was not saved... Play again?',
        nextText: -1
    }
    ]
},

{
    id: 18,
    text: 'You turn and leave riddled with guilt for giving up the basket of goodies meant for grandma. Just as you turn to leave, the wolf shows up! He was planning to eat grandmother before you arrived, but why settle for just her? With a nefarious smile, the wolf opens his mouth and gobbles you up before you can leave or even scream for help! Poor grandmother is surely next...',
    options: [
    {
        text: 'Leaving grandmothers cottage was not the way to go, you were both gobbled up! Play again?',
        nextText: -1
    }
    ]
},

{
    id: 19,
    text: 'You tell your grandmother what happened, apologize and simply turn to leave the cottage.',
    options: [
    {
        text: 'Leave the cottage',
        nextText: 20
    }
    ]
},

{
    id: 20,
    text: 'You turn and leave riddled with guilt for giving up the basket of goodies meant for grandma. Just as you turn to leave, the wolf shows up! He was planning to eat grandmother before you arrived, but why settle for just her? With a nefarious smile, the wolf opens his mouth and gobbles you up before you can leave or even scream for help! Poor grandmother is surely next...',
    options: [
    {
        text: 'Leaving grandmothers cottage was not the way to go, you were both gobbled up! Play again?',
        nextText: -1
    }
    ]
},

{
    id: 21,
    text: 'You put the lilies in your basket and get back on the path to grandmothers cottage.',
    options: [
    {
        text: 'Continue',
        nextText: 24
    }
    ]
},

{
    id: 22,
    text: 'You put the frog in your basket and get back on the path to grandmothers cottage.',
    options: [
    {
        text: 'Continue',
        nextText: 25
    }
    ]
},

{
    id: 23,
    text: 'You take a moment to capture the wonderful view. You even take a few selfies to post on the gram. You turn to ask the wolf to get some with you but he is nowhere to be found? So you make your way to your grandmothers cottage.',
    options: [
    {
        text: 'Continue',
        nextText: 31
    }
    ]
},

{
    id: 24,
    text: 'Your grandmother calls out to you, asking you to come inside. You hear her voice but it sounds a bit off. You wonder if its due to her not feeling well.',
    options: [
    {
        text: 'Screw this, do NOT go inside!',
        nextText: 26
    },
    {
        text: 'Go inside the cottage',
        nextText: 27
    }
    ]
},

{
    id: 25,
    text: 'Your grandmother calls out to you, asking you to come inside. You hear her voice but it sounds a bit off. You wonder if its due to her not feeling well.',
    options: [
    {
        text: 'Screw this, do NOT go inside!',
        nextText: 26
    },
    {
        text: 'Go inside the cottage',
        nextText: 29
    }
    ]
},

{
    id: 26,
    text: 'As you turn to leave, you hear footsteps approach and open the door. A large figure comes out into the light... its the wolf you met in the woods! And hes dressed as grandmother! You manage to get away and run home, unaware that your grandmother has been consumed... ',
    options: [
    {
        text: 'You may have saved yourself, but not your poor grandmother... Play again?',
        nextText: -1
    },
    ]
},

{
    id: 27,
    text: 'Upon entering the cottage, your grandmother does not look like herself at all. As you get closer, the figure jumps out! Showing itself to be the wolf you met on your way to the cottage! ',
    options: [
    {
        text: 'Run away',
        nextText: 12
    },
    {
        text: 'Give the lilies to the wolf',
        nextText: 28
    },
    {
        text: 'Stand and fight',
        nextText: 13
    },
    ]
},

{
    id: 28,
    text: 'You attempt to create space between you and the wolf but he only gets closer. Remembering the lilies in your basket, you pull them out and just as the wolf lunges at you, you manage to shove the lilies in his mouth! The wolf instantly becomes ill and spits up grandmother. The wolf manages to leave the cottage, despite the poison he was forced to ingest. You help your grandmother up and she asks you to stay and enjoy the basket with her. You of course agree.',
    options: [
    {
        text: 'Congratulations, its a good thing you grabbed those lilies! Play again?',
        nextText: -1
    },
    ]
},

{
    id: 29,
    text: 'Upon entering the cottage, your grandmother does not look like herself at all. As you get closer, the figure jumps out! Showing itself to be the wolf you met on your way to the cottage! ',
    options: [
    {
        text: 'Run away',
        nextText: 12
    },
    {
        text: 'Give the frog to the wolf',
        nextText: 30
    },
    {
        text: 'Stand and fight',
        nextText: 13
    },
    ]
},

{
    id: 30,
    text: 'You attempt to create space between you and the wolf but he only gets closer. Forgetting about the frog in your basket, you are shocked as it jumps out, straight into the wolfs mouth! You just assume he will eat it and continue pursuing you but instead he instantly becomes ill and spits up your grandmother! The wolf manages to leave the cottage, despite ingesting the poisonous frog. You help your grandmother up and she asks you to stay and enjoy the basket with her. You of course agree.',
    options: [
    {
        text: 'Congratulations, who knew you had a poisonous frog with you the whole time! Play again?',
        nextText: -1
    },
    ]
},

{
    id: 31,
    text: 'Your grandmother calls out to you, asking you to come inside. You hear her voice but it sounds a bit off. You wonder if its due to her not feeling well.',
    options: [
    {
        text: 'Screw this, do NOT go inside!',
        nextText: 26
    },
    {
        text: 'Go inside the cottage',
        nextText: 11
    }
    ]
},
]

startGame()