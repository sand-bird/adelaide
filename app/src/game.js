export const messages = [
  {
    text: "This is a redux test message",
    id: "test1",
    next: "test2"
  },
  {
    text: "You have made it to test 2, hopefully with the NEXT function",
    id: "test2",
    next: null
  },
  {
    text: "The quick brown fox jumped over the lazy dog. The lazy dog has been getting real sick of this shit",
    id: "lazy",
    next: "lazy2"
  },
  {
    text: "So the dog bit the fox right in his stupid fox face.",
    id: "lazy2",
    next: null
  },
  {
    text: "Warm and cozy. You love your ghost-patterned sheets.",
    id: "room_bed",
    next: null
  },
  {
    text: "Various burning candles give off a bouquet of scents.",
    id: "room_altar",
    next: null
  },
  {
    text: "You wonder what your friends have to say today...",
    id: "room_comp",
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
    name: "EXIT",
    id: "bed_exit",
    script: {msg: 'lazy'},
    show: true
  },
  {
    name: "ENTER",
    id: "bed_enter",
    script: () => {
      console.log ('help me')
    },
    show: true
  },
  {
    name: "SIT",
    id: "test_sit",
    script: () => {
      console.log ('help me')
    },
    show: true
  },
  {
    name: "STAND",
    id: "test_stand",
    script: () => {
      console.log ('help me')
    },
    show: true
  },
  {
    name: "COMPUTER",
    id: "ex_bed_computer",
    script: {msg: 'room_comp'},
    show: true
  },
  {
    name: "ALTAR",
    id: "ex_bed_altar",
    script: {msg: 'room_altar'},
    show: true
  },
  {
    name: "BED",
    id: "ex_bed_bed",
    script: {msg: 'room_bed'},
    show: true
  },
  {
    name: "EXAMINE",
    id: "bed_examine",
    script: {actns: ['ex_bed_bed', 'ex_bed_computer', 'ex_bed_altar'], back: true},
    show: true
  }
]
