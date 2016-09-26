var fs = require('fs')


var messages = [
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
    text: "Let's test action pages yeahH!!!",
    id: "abcd",
    next: null
  }
]


fs.writeFile('output.js', "export const messages = " + JSON.stringify(messages), (err) => {
  if (err) throw err
  console.log('It\'s saved!')
})
