export const defaultSave = {
  msg: '',
  pic: '',
  actns: [],
  flags: []
}

export const messages = [
  {
    text: "Welcome to the engine. This is the initial message. Of course, if this were actually a game it would be something story related. But it's not :( Even so, this text still has to be way longer to fully test the textArray feature. It's pretty cool! The only thing you have to take into account is that messages that appear alongside actions should still be three lines long. Maybe I'll write something to truncate them, I don't know.",
    id: "first",
    next: "test2"
  },
  {
    text: "This is the second text block. It's the first one where actions should appear. So, let's make it relatively long to make sure it looks okay when actions appear below a three (or four!??!?) line block.",
    id: "test2",
    next: null
  },
  {
    text: "Action start!!!!!! !!!!!!!! !!!!!!!!!!!!! !!!!!!!!! !!!!!!!!!!!!!!!!!!",
    id: "abcd",
    next: null
  }
]

export const pictures = [
  {
    file: "./public/images/bedroom.png",
    id: "bedroom"
  },
  {
    file: "./public/images/computer.png",
    id: "computer"
  },
  {
    file: "./public/images/outside.png",
    id: "outside"
  }
]

export const actns = [
  {
    id: "yeah",
    name: "LET'S DO THIS",  
    scripts: [{
      type: "loadItems",
      value: ''
    }]
  }
]

export const menuActions = [
{
    id: "resume",
    name: "RESUME",
    scripts: [{
      type: '',
      value: ''
    }]
  },
  {
    id: "options",
    name: "OPTIONS",
    scripts: [{
      type: '',
      value: ''
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

export const titleActions = [
  {
    id: "new_game",
    name: "NEW GAME",
    scripts: [
      {
        type: "action",
        value: "NEW_SAVE"
      },
      {
        type: "action",
        value: "LOAD_GAME"
      }
    ]
  },
  {
    id: "load_game",
    name: "LOAD GAME",
    scripts: [{
      type: "action",
      value: "LOAD_GAME"
    }],
    show: ['hasSave']
  },
  {
    id: "options",
    name: "OPTIONS",
    scripts: [{
      type: "loadItems",
      value: {msg: "abcd", actns: ["ex_bed_bed"]}
    }]
  }
]
