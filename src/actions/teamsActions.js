export const GET_TEAMS = 'GET TEAMS'
export const GET_TEAMS_SUCCESS = 'GET_TEAMS_SUCCESS'
export const GET_TEAMS_FAILURE = 'GET_TEAMS_FAILURE'

export const getTeams = () => ({ type: GET_TEAMS })
export const getTeamsSuccess = teams => ({
  type: GET_TEAMS_SUCCESS,
  payload: teams,
})
export const getTeamsFailure = () => ({ type: GET_TEAMS_FAILURE })

export function fetchTeams() {
  return async dispatch => {
    dispatch(getTeams())

    try {
      const response = await fetch('https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/teams')
      const data = await response.json()

      dispatch(getTeamsSuccess(data))
    } catch (error) {
      dispatch(getTeamsFailure())
    }
  }
}
