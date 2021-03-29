import React from 'react'
import { connect } from 'react-redux'

import { fetchUser } from '../actions/userActions'
// import { fetchComments } from '../actions/commentsActions'

import { Team } from '../components/Team'
import  {User}  from '../components/User'

const applyFilter = searchTerm => article =>
article?.displayName.toLowerCase().includes(searchTerm.toLowerCase());

const UserPage = ({
  team,
  hasErrors,
  loading,
  searchTerm, onSearch
}) => {
  // useEffect(() => {
  //   const { id } = match.params

  // //  dispatch(fetchComments(id))
  //   dispatch(fetchPost(id))
  // }, [dispatch, match])

  const renderTeam = () => {
    if (loading.team) return <p>Loading Team...</p>
    if (hasErrors.team) return <p>Unable to display Team.</p>
    const Search = ({ value, onSearch }) =>
    <div className="searchBox">
      <input
        value={value}
        onChange={event => onSearch(event.target.value)}
        type="text"
        placeholder="Search minimum of 2 characters..."
      />
    </div>

    return (
      <>
      <Search value={searchTerm} onSearch={onSearch} />
        <Team team={team} />
        <h2>Users</h2>
        {
          team.users.filter(applyFilter(searchTerm)).map(comment => (
            <User key={comment.id} user={comment} />
          ))
        }
      </>
    )
  }

  // const renderComments = () => {
  //   if (loading.comments) return <p>Loading comments...</p>
  //   if (hasErrors.comments) return <p>Unable to display comments.</p>

  //   return comments.map(comment => (
  //     <Comment key={comment.id} comment={comment} />
  //   ))
  // }

  return (
    <section>
      {renderTeam()}
    </section>
  )
}

const mapStateToProps = state => ({
  team: state.team.team,
  loading: { team: state.team.loading },
  hasErrors: { team: state.team.hasErrors},
  searchTerm: state.searchState.searchTerm
}
)
// const search = window.location.href.split("/");
// const params = new URLSearchParams(search);
// const foo = params.get('id');
// console.log("Id param "+foo);
const mapDispatchToProps = dispatch => ({
  onSearch: searchTerm => dispatch({ type: 'SEARCH_SET', searchTerm }),
  onTeams:dispatch(fetchUser(window.location.href.split("/")[4]))
});
export default connect(mapStateToProps,mapDispatchToProps)(UserPage)
