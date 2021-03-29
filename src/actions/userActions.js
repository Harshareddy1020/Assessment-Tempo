export const GET_USER = 'GET_USER'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAILURE = 'GET_USER_FAILURE'

export const getUser = () => ({ type: GET_USER })
export const getUserSuccess = user => ({
  type: GET_USER_SUCCESS,
  payload: user,
})
export const getUserFailure = () => ({ type: GET_USER_FAILURE })

export function fetchUser(id) {
  return async dispatch => {
    dispatch(getUser())

    try {
      const response = await fetch(
        `https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/teams/${id}`
      )
      var data = await response.json()
      if(data.teamMemberIds){
        var userData=[];
        for (var i = 0; i < data.teamMemberIds.length; i++) {
          const Userresponse = await fetch(
            `https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/users/${data.teamMemberIds[i]}`
          )
          const Userdata = await Userresponse.json()
          userData[i]=Userdata;
        }
        data.users=userData;
      }
      dispatch(getUserSuccess(data))
    } catch (error) {
      dispatch(getUserFailure())
    }
  }
}
