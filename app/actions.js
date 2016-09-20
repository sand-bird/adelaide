export const loadItems = (object) => {
  return {
    type: 'LOAD_ITEMS',
    object: object
  }
}
export const nextMessage = () => {
  return {
    type: 'NEXT_MESSAGE'
  }
}
export const loadSave = (save) => {
  return {
    type: 'LOAD_SAVE',
    save: save
  }
}
export const newSave = () => {
  return {
    type: 'NEW_SAVE'
  }
}
export const readKey = (key) => {
  return {
    type: 'READ_KEY',
    key: key
  }
}
export const setCurrentAction = (action) => {
  return {
    type: 'SET_CURRENT_ACTION',
    action: action
  }
}
export const removeCurrentAction = () => {
  return {
    type: 'REMOVE_CURRENT_ACTION'
  }
}
export const invokeAction = () => {
  return {
    type: 'INVOKE_ACTION'
  }
}