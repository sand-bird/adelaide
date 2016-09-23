import * as actions from './actions'
import * as game from './src/game'
import {newLineify, newMessageify, filterActions, pagifyActions} from './utils'

const reducers = (state, action) => {

  /* ~~~~~~~~~~~~~~~~~~ *
   *  UTIL METHODS YAY  *
   * ~~~~~~~~~~~~~~~~~~ */

  // wrapper for Object.assign because pretty
  const generateState = (...args) => {
    return Object.assign({}, state, ...args)
  }
  
  // for when there are too many copies
  const mutateState = (state, object) => {
    for (k in object) state[k] = object[k]
    return state
  }
  
  let activeActions = 
    state.screen == 'GAME' ? state.actions :
    state.screen == 'MENU' ? filterActions(game.menuActions, state.save) :
    state.screen == 'TITLE' ? filterActions(game.titleActions, state.save) :
    state.screen == 'OPTIONS' ? filterActions(game.optionsActions, state.save) : []
  
  let actnsHasPages = state.actionPageIndex >= 0 
    && Array.isArray(state.actions[state.actionPageIndex])
    
  let rightmostAction = actnsHasPages ? 
    state.actions[state.actionPageIndex].length - 1 :
    state.actions.length - 1
    
  let actnsHasPrev = actnsHasPages && state.actionPageIndex > 0
  let actnsHasNext = actnsHasPages
    && state.actionPageIndex < state.actions.length - 1
  
  console.log("hasnext")
  console.log(actnsHasNext)
  
  let msgHasMore = Array.isArray(state.msg.text) 
    && state.textArrayIndex < state.msg.text.length - 1
    
  let noCurrAction = state.currentAction < 0
    
  /* ~~~~~~~~~~~~~~~~ *
   *  REDUCER PROPER  *
   * ~~~~~~~~~~~~~~~~ */

  switch (action.type) {

    case 'LOAD_ITEMS':
      var newState = generateState()

      if (action.object.msg) {   
        var newMsg = game.messages.find( 
          msg => { return msg.id === action.object.msg } 
        )
        
        // don't change what works to what doesn't
        // TODO : implement this for the others
        if (typeof(newMsg) === 'undefined')
          return
        
        newMsg.text = 
          newMessageify(
            newLineify(
              newMsg.text, state.settings.textWidth
            ), state.settings.textLines
          )
          
        newState.msg = newMsg
        newState.currentText = ''
        newState.textArrayIndex = 0
        newState.typeQueue = []
      }
      if (action.object.actns) {
        var newActns = []
        // do this complicated bullshit to make sure our
        // actions show up in the order we specified
        action.object.actns.forEach ( newActn => {
          newActns.push( game.actns.find ( actn => 
            { return actn.id === newActn }  
          ))
        })
        if (action.object.back) {
          // if this actionset change is back-able, save
          // the previous actionset and currentaction
          newState.lastActions = newState.actions
          newState.lastCurrentAction = newState.currentAction
        }
        else {
          newState.lastActions = []
          newState.lastCurrentAction = 0
        }
        newState.currentAction = state.lastCurrentAction
        newState.actionPageIndex = 0
        newState.actions = 
          pagifyActions(
            filterActions(
              newActns, state.save
            ), state.settings.actionsPerPage
          )
      }
      if (action.object.pic) {   
        var newPic = game.pictures.find( 
          pic => { return pic.id === action.object.pic } 
        )
        newState.picture = newPic
      }
            
      return newState
      
    case 'NEXT_MESSAGE':
      if (typeof(state.msg.next) === 'string')
        return reducers(state, actions.loadItems({msg: state.msg.next}))
        
      else if (typeof(state.msg.next) === 'object')
        // load multiple items at once, for "cutscenes"
        // careful cause this can override a loadItems action i guess
        return reducers(state, actions.loadItems(state.msg.next))
      
      // if it's not a string or an object we don't care for it  
      else return state
      
    case 'LOAD_SAVE':
      return generateState({save: action.save})
      
    case 'NEW_SAVE':
      return generateState({save: game.defaultSave})
     
    case 'LOAD_GAME':
      console.log("loading game")
      return generateState(
        reducers(state, actions.loadItems(state.save)),
        {screen: 'GAME'}
      )

    case 'READ_KEY':
      var newState = generateState()
      
      newState.lastKey = action.key
      
      console.log("red key "+ action.key)
      
      switch(action.key) {
 
        case "ArrowLeft":
          if (noCurrAction)
            newState.currentAction = rightmostAction
          else if (state.currentAction > 0)
            newState.currentAction = state.currentAction - 1
          else if (actnsHasPrev) {
            newState.actionPageIndex = state.actionPageIndex - 1
            newState.currentAction = 
              // get the last index of prev page
              // (really this should always be equal to
              // settings.actionsPerPage but it doesn't hurt)
              state.actions[newState.actionPageIndex].length - 1
          }
          return newState

        case "ArrowRight":
          if (noCurrAction) {
            console.log("nocurraction")
          newState.currentAction = 0 }
          else if (state.currentAction < rightmostAction) {
            console.log("< rightmost")
          newState.currentAction = state.currentAction + 1}
          else if (actnsHasNext) {
            console.log("hasnezt")
            newState.actionPageIndex = newState.actionPageIndex + 1
            newState.currentAction = 0
            console.log(state.actionPageIndex)
          }
          return newState
        
        case "Enter":
        case 'z':
        case ' ':
          if (newState.typing)
            return reducers(newState, actions.completeType())
          else if (msgHasMore)
            return generateState(newState, {
              textArrayIndex: newState.textArrayIndex + 1,
              currentText: '',
              typeQueue: []
            })
          else if (newState.msg.next)
            return reducers(newState, actions.nextMessage())
          else if (newState.currentAction >= 0 )
            return reducers(newState, actions.invokeAction())
        
        case "Backspace":
        case 'x':
          if (newState.lastActions.length > 0) {
            newState.currentAction = newState.lastCurrentAction
            return reducers(newState, actions.loadItems(
              {actns: state.lastActions.map(actn => {return actn.id}) }
            ))
          }
          else return newState
        
        case "Escape":
          return reducers(newState, actions.toggleMenu())
        
        default:
          return newState
      }
      
    case 'SET_CURRENT_ACTION':
      return generateState({currentAction: action.index})
    
    case 'REMOVE_CURRENT_ACTION':
      return generateState({currentAction: -1})
      
    case 'INVOKE_ACTION':
      var newState = generateState()
      
      activeActions[state.currentAction].scripts.forEach ( source => {
        // a REFERENCE!!!! to newState if it's populated already
        // or state otherwise. (in case this is > the 1st loop)
        let currentState = newState ? newState : state
        switch (source.type) {
        
          case 'function':
            // a necessary evil! so we can run our 
            // function in the context of reducers
            newState = eval('(' + source.value.toString() + ')()')
            
          case 'loadItems':
            newState = reducers(currentState, actions.loadItems(source.value))
            break
            
          case 'setState':
            newState = generateState(source.value)
            break
            
          case 'dispatch':
            if (typeof(source.value) === 'string')
              // shorthand for argumentless actions is just the type string
              newState = reducers(currentState, {type: source.value})
            else newState = reducers(currentState, source.value)
            break
           
          case 'relay': 
            // action's script is the id of another action
            // whose script we want to execute
            newState = reducers(currentState, actions.invokeAction(
              game.actns.find ( actn => 
                { return actn.id === source.script }  
              )
            ))    
            break
        }
      })
      
      console.log("end of invoke action")
      console.log(newState)
      
      if (newState) return newState
      else return state
      
    case 'TYPE':
      return generateState({
        currentText: state.currentText + action.char,
        typing: action.more
      })
      
    case 'COMPLETE_TYPE':
      
      let assign
      // it's a little bit of a hack, but this action handles
      // the logic behind multi-text messages.
      
      if (Array.isArray(state.msg.text)) {
        assign = {
          currentText: state.msg.text[state.textArrayIndex],
          typeQueue: [],
          typing: false
        }
      }
      else assign = {
        currentText: state.msg.text,
        typeQueue: [],
        typing: false
      } 
      
      for (let i = 0; i < state.typeQueue.length; i++) {
        clearTimeout(state.typeQueue[i])
      }
      
      return generateState(assign)
      
    case 'SET_TYPE_QUEUE':
      return generateState({typeQueue: action.queue})
      
    case 'TOGGLE_MENU':
      
      return state
    
 
    default:
      return state
  }
}

export default reducers
