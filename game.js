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
})
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
    text: 'In this game, you (the player) are tasked with getting to your ailing grandmothers house to make her feel better! You will have to make tough choices along the way that can alter how things turn out. Good luck!',
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
    text: 'Your mom calls out to you from the kitchen, requesting that you come downstairs. She wants you to visit your grandmother. She lives a little ways off, through the woods, in a small cottage. She has been feeling terribly ill as of late and your mother has prepared a basket that she believes will help her feel much better!',
    options: [
    {
        text: 'Head out the front door',
        requiredState: (currentState) => currentState.begin,
        setState: { leaveRoom: true},
        nextText: 3
    },
    ]
},
{
    id: 3,
    text: 'As you leave home and begin your journey, you hear all manner of forest creatures and even see some critters darting between the trees. The sun is shining bright overhead and you consider how nice the gentle breeze feels. Suddenly, a tall and imposing wolf appears in front of you. As he goes to speak you...',
    options: [
    {
        text: 'Ignore the wolf and run away, sticking to the path that leads to grandmas house',
        nextText: 4
    },
    {
        text: 'Greet him and start a conversation. The journey has been quite boring up until now!',
        nextText: 5
    },
    {
        text: 'See him as a threat, offer up your basket, and hope he will just take it and leave.',
        nextText: 6
    }
    ]
},
{
    id: 4,
    text: 'You intently stare at the wolf, daring him to do something as you walk by, continuing on the path to grandmas house. After some time passes, you finally arrive at grandmas cottage. You knock on the front door. ',
    options: [
    {
        text: 'Knock, knock',
        nextText: 7
    }
    ]
    },
    {
    id: 5,
    text: 'You and the wolf begin talking like old friends. Lost in conversation, he discreetly leads you off the path to grandmas house, deeper into the woods. Out of nowhere, you come across a beautiful meadow, what a site!',

    options: [
        {
        text: 'Go to the meadow',
        nextText: 8   
    }
]
},
{
    id: 6,
    text: 'You soon arrive at grandmas cottage, a little sad for not having the basket for her... it could have made her feel so much better! You knock on the door, hoping your presence at least will be enough.',
    options: [
    {
        text: 'Knock, knock',
        nextText: 9
    }
    ]
},
{
    id: 7,
    text: 'Your grandmother calls out to you, asking you to come inside. You hear her voice, but it does not sound normal. You wonder if its due to her not feeling well.',
    options: [
    {
        text: 'Something feels off, do not go inside',
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
    text: 'Once in the meadow, you see beautiful flowers, butterflies, frogs and other small creatures moving about blissfully.',
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
    text: 'Your grandmother calls out to you, asking you to come inside. You hear her voice but it does not sound normal. You wonder if its due to her not feeling well.',
    options: [
    {
        text: 'Something feels off, turn around and leave!',
        nextText: 18
    },
    {
        text: 'Go inside the cottage',
        nextText: 19
    }
    ]
},
{
    id: 10,
    text: 'Noticing the change in your grandmas voice, you take a brief moment to think about going inside. You decide against it and turn to leave but just as you do, a large figure opens the door! Its the wolf you saw on your way to grandmas cottage! You try to run but your knees buckle beneath you! You are definitely NOT a Jamaican track star... the wolf gobbles you up as dessert!',
    options: [
    {
        text: 'Play again?',
        nextText: -1
    }
    ]
},
{
    id: 11,
    text: 'Upon entering grandmas house, you notice she looks a bit off. You see long ears, a long nose and yellow eyes stare back at you, all wrapped up in one of grandmas nightgowns... this is not your grandma at all!',
    options: [
    {
        text: 'Screw this, run!!!',
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
    text: 'You drop the basket running out of the cottage. The wolf takes a moment to smell the contents of the basket giving you time to flee. You make it home and tell your mom what happened. Terrified that the wolf may have followed you home, she begins to pack for the city. Both unaware of the horror that has just happened to granny...',
    options: [
    {
        text: 'Play again?',
        nextText: -1
    }
    ]
},
{
    id: 13,
    text: 'You square up with the wolf. You yell out, "Falcon Punch!" With all your might you hit the wolf in the stomach! Stunned from the blow, he folds over, spitting up grandma in the process. He runs from the cottage and into the woods to tend to his aching stomach. Grandma, grateful for the rescue, asks you to stay and enjoy the basket with her. You agree.',
    options: [
    {
        text: 'Congratulations! You took matters into your own hands and saved your grandmother!! Play again?',
        nextText: -1
    }
    ]
},
{
    id: 14,
    text: 'You let out a high pitched, ear piercing scream! Nearby, a woodsman hears the blood curdling scream and runs over to lend a hand. He bursts into the cottage, breathing heavily from his run, you...',
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
        text: 'Run away, ASAP!',
        nextText: 17
    }
    ]
},
{
    id: 15,
    text: 'You and the woodsman jump into action! With the woodsman overtaking the wolf, you are able to land a staggering punch to his stomach. Suddenly, the wolf spits out grandma and passes out. The woodsman wishes you and grandma well and offers to take the wolf with him back to the woods. You agree and watch them disappear into the trees. Grandma, relieved to be free from the wolfs stomach, asks you to stay and enjoy the basket with her. You agree.',
    options: [
    {
        text: 'Congratulations! You assisted in saving your grandmother from the wolf! Play again?',
        nextText: -1
    }
    ]
},
{
    id: 16,
    text: 'You watch the woodsman expertly take down the wolf. He starts with a fierce kick to the stomach. The wolf spits out grandma! As the wolf staggers from spitting up grandma the woodsman puts him in a rear naked choke hold and the wolf passes out. Upon the release of the hold, the woodsman wishes you and grandma well and drags the wolf with him back to the woods. You and grandma are free to enjoy the wonderful basket of goodies!',
    options: [
    {
        text: 'Congratulations! You call for help paid off, grandma is saved! Play again?',
        nextText: -1
    }
    ]
},
{
    id: 17,
    text: 'Frightened by both the wolf and the strange woodsman, you dart out of the cottage and make your way towards home. The woodsman, puzzled by your sudden desire to flee, is distracted and defenseless! The wolf, angered at loosing his chance to eat you (and never missing an opportunity to eat of course) decides to eat the defenseless woodsman instead! The wolf vows to find and eat you next as he finishes up his current meal...',
    options: [
    {
        text: 'Play again?',
        nextText: -1
    }
    ]
},
{
    id: 18,
    text: 'You turn and leave riddled with guilt for giving up the basket of goodies meant for grandma. As you turn to leave, the wolf you saw on your journey shows up. He was planning to eat grandma before you arrived, but why settle for the old bag? The wolf, with a nefarious smile, opens his mouth and gobbles you up before you can leave or scream for help! If there is room, grandma is next...',
    options: [
    {
        text: 'Play again?',
        nextText: -1
    }
    ]
},
{
    id: 19,
    text: 'You walk up and tell grandma what happened. Grandma, the narcissistic old bag that she is, begins to read you the riot act. Already feeling bad about losing the basket, you simply turn to leave the house.',
    options: [
    {
        text: 'Leave the house',
        nextText: 20
    }
    ]
},
{
    id: 20,
    text: 'You turn and leave riddled with guilt for giving up the basket of goodies meant for grandma. Just as you open the door, the wolf from before shows up! He was planning to eat grandma before you arrived, but why settle for the old bag? The wolf, with a nefarious look, gobbles you up before you can leave or scream for help! Maybe grandma is next!',
    options: [
    {
        text: 'Play again?',
        nextText: -1
    }
    ]
},
{
    id: 21,
    text: 'You put the lilies in the basket and hurry back to the path to grandmas house.',
    options: [
    {
        text: 'Continue',
        nextText: 24
    }
    ]
},
{
    id: 22,
    text: 'You put the frog in your pocket and get back to the path to grandmas house.',
    options: [
    {
        text: 'Continue',
        nextText: 25
    }
    ]
},
{
    id: 23,
    text: 'You take a moment to capture the wonderful view. You even take a few selfies to post on the gram.',
    options: [
    {
        text: 'Continue',
        nextText: 25
    }
    ]
},
{
    id: 24,
    text: 'Your grandmother calls out to you, asking you to come inside. You hear her voice but it does not sound normal. You wonder if its due to her not feeling well...',
    options: [
    {
        text: 'Something feels off, do not go inside',
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
    text: 'Your grandmother calls out to you, asking you to come inside. You hear her voice but it does not sound normal. You wonder if its due to her not feeling well.',
    options: [
    {
        text: 'Something feels off, do not go inside',
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
    text: 'As you turn to leave, you hear footsteps approach and open the door. A large figure comes out into the light. Its the wolf you met in the woods dressed as granny! You manage to run home, unaware that grandma has been consumed... ',
    options: [
    {
        text: 'Play again?',
        nextText: -1
    },
    ]
},
{
    id: 27,
    text: 'Upon entering the cottage, your grandma does not look like herself at all. As you get closer, a figure jumps out, showing itself to be the wolf you met on your way to grandmas.... ',
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
    text: 'You begin to take steps back in an attempt to create space between you and the wolf. The wolf notices and begins to step forward, but you remember the lilies in your basket! You pull them out and as the wolf lunges at you, you manage to sidestep and shove the lilies into the wolfs mouth! The wolf instantly becomes ill and spits up grandma! He somehow manages to leave the cottage, despite the poison it was forced to ingest. You help grandma up and she asks you to stay and enjoy the basket with her. You agree.',
    options: [
    {
        text: 'Congratulations, those lilies really came in hand! Play again?',
        nextText: -1
    },
    ]
},
{
    id: 29,
    text: 'Upon entering the cottage, you grandma does not look like herself at all. As you get closer, a figure jumps out, showing itself to be the wolf you met on your way to grandmas.... ',
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
    text: 'You begin to take steps back in an attempt to create space between you and the wolf. You offer up the frog but the wolf ignores it. He begins to close in on you, but just as he opens his mouth to eat you, the frog jumps in! The wolf stops his pursuit of you and instantly feels ill. He begins to vomit! In his exhaustive vomiting sequence, he spits out grandma onto the floor and flees! You and grandma are able to enjoy the basket of goods peacefully.',
    options: [
    {
        text: 'Congratulations, great thinking grabbing that frog from the meadow! Play again?',
        nextText: -1
    },
    ]
},
]
startGame()