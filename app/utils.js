/* ~~~~~~~~~~~~~~~~~~ *
 *  UTIL METHODS YAY  *
 * ~~~~~~~~~~~~~~~~~~ */
 
export const everyNthIndexOf = (string, pattern, lines) => {
    let i = -1
    let n = lines
    let indices = []
    do { 
      n--
      i++
      i = string.indexOf(pattern, i)
      if (n == 0) { 
        indices.push(i)
        n = lines
      }
    }
    while ( i < string.length && i > 0)
    return indices
}

export const newLineify = (string, interval) => {
  let lines = []
  // our starting index
  let i = 0
  // distance of space from i
  let j = 0
  while (i + interval < string.length) {
    j = string.slice(i, i + interval).lastIndexOf(" ")
    lines.push (string.slice(i, i + j))
    i += j
  }
  lines.push(string.slice(i, string.length))
  return (lines.join("\n"))
}

export const newMessageify = (string, lines) => {
  let indices = everyNthIndexOf(string, "\n", lines)
  if (indices.length > 0) {
    let msgArray = []
    let i = 0
    let j = 0
    while (i < indices.length) {
      msgArray.push(string.slice(j, indices[i]))
      j = indices[i] + 1
      i++
    }
    msgArray.push(string.slice(j))
    return msgArray
  }
  else return string
}

export const showAction = (action, save) => {
  let show = true
  
  // Array.every function makes sure every 
  // showFlag goes FOUND in state.save.flags
  // (breaks as soon as it finds a falsy value)
  if (action.show !== undefined)
    show = action.show.every( flag => {
      return save.flags.indexOf(flag) >= 0
    })
    
  // make sure every hideFlag goes UNFOUND
  if (action.hide !== undefined)
    show = action.hide.every( flag => {
      return save.flags.indexOf(flag) < 0
    })

  return show
}

export const filterActions = (actions, save) => {
  return actions.filter(action => { return showAction(action, save) })
}





