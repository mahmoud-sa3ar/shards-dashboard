import { SET_LOGIN } from '../../utils/ActionTypes'

const INITIAL_STATE = {
  user: { loggedIn: false, userData: {} },
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return { user: action.data }
    default:
      return state
  }
}
