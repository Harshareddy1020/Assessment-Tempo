import * as actions from '../actions/userActions'

export const initialState = {
  loading: true,
  hasErrors: false,
  team: {},
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_USER:
      return { ...state, loading: true }
    case actions.GET_USER_SUCCESS:
      return { team: action.payload, loading: false, hasErrors: false }
    case actions.GET_USER_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}
