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

// JUNST IN CASE 
export const fancyFlatten = (array) => {
  let newArray = []
  array.forEach( item => {
    Array.isArray(array) ? 
    newArray = newArray.concat(item) :
    newArray.push(item)
  })
  return newArray
}

export const pagifyActions = (actions, pageSize) => {
  // we don't trust old pagify jobs. let's start from scratch
  if (Array.isArray(actions[0]))
    actions = fancyFlatten(actions)
  
  if (actions.length > pageSize) {
    let newActions = []
    let currPage = []
    let n = pageSize
    
    actions.forEach((action, index) => {
      n--
      currPage.push(action)
      if (!n || index == actions.length - 1) {
        newActions.push(currPage)
        currPage = []
        n = pageSize
      }
    })
    return newActions
  }
  else return actions
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

// TODO: handle actionPages
// (this should be called before pagifyActions,
// but just in case)
export const filterActions = (actions, save) => {
  return actions.filter(action => { return showAction(action, save) })
}





