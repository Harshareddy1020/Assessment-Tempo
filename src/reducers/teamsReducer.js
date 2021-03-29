import * as actions from '../actions/teamsActions'

export const initialState = {
  loading: false,
  hasErrors: false,
  teams: [],
}

export default function teamsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_TEAMS:
      return { ...state, loading: true }
    case actions.GET_TEAMS_SUCCESS:
      return { teams: action.payload, loading: false, hasErrors: false }
    case actions.GET_TEAMS_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}
