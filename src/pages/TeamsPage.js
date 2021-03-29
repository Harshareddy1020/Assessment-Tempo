import React from 'react'
import { connect } from 'react-redux'

import { fetchTeams } from '../actions/teamsActions'

import { Team } from '../components/Team'

const applyFilter = searchTerm => article =>
article.name.toLowerCase().includes(searchTerm.toLowerCase());

const TeamsPage = ({ loading, teams, hasErrors,searchTerm, onSearch }) => {

  const renderTeams = () => {
    if (loading) return <p>Loading teams...</p>
    if (hasErrors) return <p>Unable to display Teams.</p>

    return teams.filter(applyFilter(searchTerm)).map(team => <Team key={team.id} team={team} excerpt />)
  }
  
  const Search = ({ value, onSearch, children }) =>
  <div className="searchBox">
    <input
      value={value}
      onChange={event => onSearch(event.target.value)}
      type="text"
      placeholder="Search minimum of 2 characters..."
    />
  </div>
  return (
    <section>
    <Search value={searchTerm} onSearch={onSearch} />
      <h1>Teams</h1>
      {renderTeams()}
    </section>
  )
}

const mapStateToProps = state => ({
  loading: state.teams.loading,
  teams: state.teams.teams,
  hasErrors: state.teams.hasErrors,
  searchTerm: state.searchState.searchTerm
})
const mapDispatchToProps = dispatch => ({
  onSearch: searchTerm => dispatch({ type: 'SEARCH_SET', searchTerm }),
  onTeams:dispatch(fetchTeams())
});
export default connect(mapStateToProps,mapDispatchToProps)(TeamsPage)
