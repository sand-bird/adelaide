const actionTypes = [
  'load', // passes value as param to dispatch.loadItems
  'set', // passes value as param to reducers.generateState
  'dispatch', // pass string to call that dispatch with no params, else pass hash with type: type
  'relay', // calls dispatch.invokeAction on the action id specified
  'function', // calls a function with eval(). for crazy shit only
]

export const defaultSave = {
  msg: 'star1',
  pic: 'stars',
  actns: ['star_fame', 'star_friends', 'star_happy'],
  flags: []
}

export const messages = [
  {
    text: "\"Look, a shooting star! Did you see it?!\"",
    id: "star1",
    next: "star2"
  },
  {
    text: "\"Addy, what are you going to wish for?\"",
    id: "star2",
    next: null
  },
  {
    text: "ADELAIDE: Hm... I think... I wanna be famous, someday. Really, really famous!",
    id: "wish_fame",
    next: "star3"
  },
  {
    text: "ADELAIDE: I wish for... friends! Lots of nice friends to play with all the time!",
    id: "wish_friends",
    next: "star3"
  },
  {
    text: "ADELAIDE: Um, I guess... I just... want to be happy. Is that enough?",
    id: "wish_happy",
    next: "star3"
  },
  {
    text: "*chuckle*",
    id: "star3",
    next: "star4"
  },
  {
    text: "\"That's a pretty good wish.\"",
    id: "star4",
    next: "star5"
  },
  {
    text: "\"...\"",
    id: "star5",
    next: "star6"
  },
  {
    text: "\"...Come on, let's go home. It's getting cold out, and mom is gonna worry.\"",
    id: "star6",
    splash: true,
    next: {msg: "bed1", pic: "computer", actns: ["bed_wake"]}
  },
  {
    text: "It's Sunday morning. You are in your bedroom. What will you do?",
    id: "bed1",
    next: null
  }
]

export const pictures = [
  {
    file: "./app/src/img/bedroom.png",
    id: "bedroom"
  },
  {
    file: "./app/src/img/computer.png",
    id: "computer"
  },
  {
    file: "./app/src/img/stars.gif",
    id: "stars"
  }
]

export const actns = [
  {
    id: "star_fame",
    name: "FAME",
    scripts: [{
      type: 'load',
      value: {msg: "wish_fame", actns:[]}
    }]
  },
  {
    id: "star_friends",
    name: "FRIENDSHIP",
    scripts: [{
      type: 'load',
      value: {msg: "wish_friends", actns:[]}
    }]
  },
  {
    id: "star_happy",
    name: "HAPPINESS",
    scripts: [{
      type: 'load',
      value: {msg: "wish_happy", actns:[]}
    }]
  },
  {
    id: "bed_wake",
    name: "WAKE UP",
    scripts: [{
      type: '',
      value: ''
    }]
  }
]  
  
export const titleActions = [
  {
    id: "new_game",
    name: "NEW GAME",
    scripts: [
      {
        type: "dispatch",
        value: "NEW_SAVE"
      },
      {
        type: "dispatch",
        value: "LOAD_GAME"
      }
    ]
  },
  {
    id: "load_game",
    name: "LOAD GAME",
    scripts: [{
      type: "dispatch",
      value: "LOAD_GAME"
    }],
    show: ['hasSave']
  },
  {
    id: "options",
    name: "OPTIONS",
    scripts: [{
      type: "dispatch",
      value: "TOGGLE_OPTIONS"
    }]
  }
]
  
export const menuActions = [
  {
    id: "resume",
    name: "RESUME",
    scripts: [{
      type: 'dispatch',
      value: 'TOGGLE_MENU'
    }]
  },
  {
    id: "save",
    name: "SAVE GAME",
    scripts: [{
      type: 'dispatch',
      value: ''
    }]
  },
  {
    id: "options",
    name: "OPTIONS",
    scripts: [{
      type: 'dispatch',
      value: 'TOGGLE_OPTIONS'
    }]
  },
  {
    id: "quit",
    name: "QUIT",
    scripts: [{
      type: '',
      value: ''
    }]
  }
]
