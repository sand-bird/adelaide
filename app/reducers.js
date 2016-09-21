import * as actions from './actions'
import {messages, pictures, actns} from './src/game'

const reducers = (state, action) => {
  switch (action.type) {

    case 'LOAD_ITEMS':
      var newState = Object.assign({}, state)

      if (action.object.msg) {   
        var newMsg = messages.find( 
          msg => { return msg.id === action.object.msg } 
        )
        newState.msg = newMsg
        newState.currentText = ''
        newState.typeQueue = []
      }
      if (action.object.actns) {
        var newActns = []
        // do this complicated bullshit to make sure our
        // actions show up in the order we specified
        action.object.actns.forEach ( newActn => {
          newActns.push( actns.find ( actn => 
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
          newState.lastCurrentAction = -1
        }
        newState.currentAction = state.lastCurrentAction
        newState.actions = newActns
        console.log(newState)
      }
      if (action.object.pic) {   
        var newPic = pictures.find( 
          pic => { return pic.id === action.object.pic } 
        )
        newState.picture = newPic
      }
            
      return newState
      
    case 'NEXT_MESSAGE':
      var newMsg = messages.find( function(msg) { return msg.id === state.msg.next } )
      
      var newState = Object.assign({}, state, {msg: newMsg})
      newState.currentText = ''
      newState.typeQueue = []

      return newState
      
    case 'LOAD_SAVE':
      var newState = Object.assign({}, state)
 
      newState.save = action.save
 
      return newState
      
    case 'NEW_SAVE':
      var newState = Object.assign({}, state)
 
      newState.save = ''
 
      return newState
      
    case 'READ_KEY':
      var newState = Object.assign({}, state)
      
      var key = action.key
      newState.lastKey = key
      
      if (key == "ArrowLeft") {
        if (state.currentAction < 0 || state.currentAction >= state.actions.length)
          newState.currentAction = state.actions.length - 1
        else if (state.currentAction != 0) 
          newState.currentAction = state.currentAction - 1
      }
      else if (key == "ArrowRight") {
        if (state.currentAction < 0 || state.currentAction >= state.actions.length)
          newState.currentAction = 0
        else if (state.currentAction != state.actions.length - 1) 
          newState.currentAction = state.currentAction + 1
      }
      else if (key == "Enter" || key == 'z' || key == ' ') {
        if (newState.typing)
          return reducers(newState, actions.completeType())
        else if (newState.msg.next !== null)
          return reducers(newState, actions.nextMessage())
        else if (newState.actions.length > 0 && newState.currentAction >= 0 )
          return reducers(newState, actions.invokeAction())
      }
      else if (key == "Backspace" || key == 'x') {
        if (newState.lastActions.length > 0) {
          newState.currentAction = newState.lastCurrentAction
          console.log(newState)
          return reducers(newState, actions.loadItems(
            {actns: state.lastActions.map(actn => {return actn.id}) }
          ))
        }
      }
      else if (key == "Escape") {
        newState.screen = 'MENU'
      }
      
      return newState
      
    case 'SET_CURRENT_ACTION':
      var newState = Object.assign({}, state)

      newState.currentAction = action.action
 
      return newState
    
    case 'REMOVE_CURRENT_ACTION':
      var newState = Object.assign({}, state)
 
      newState.currentAction = -1
 
      return newState
      
    case 'INVOKE_ACTION':
      var source = state.actions[state.currentAction].script
      var newState
      
      if (typeof(source) === 'function')
        newState = source()
      else if (typeof(source) === 'object')
        newState = reducers(state, actions.loadItems(source))
      
      if (newState) return newState
      else return state
      
    case 'TYPE':
      var newState = Object.assign({}, state)
      
      newState.currentText += action.char
      newState.typing = action.more
      
      return newState
      
    case 'COMPLETE_TYPE':
      for (let i = 0; i < state.typeQueue.length; i++) {
        clearTimeout(state.typeQueue[i])
      }
      
      var newState = Object.assign({}, state)
       
      newState.currentText = newState.msg.text
      newState.typeQueue = [] 
      newState.typing = false
       
      return newState 
      
    case 'SET_TYPE_QUEUE':
      var newState = Object.assign({}, state)
      
      newState.typeQueue = action.queue
      
      return newState
 
    default:
      return state
  }
}

export default reducers
