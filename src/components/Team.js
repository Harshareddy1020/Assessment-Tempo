import React from 'react'
import { Link } from 'react-router-dom'

export const Team = ({ team, excerpt }) => (
  <article className={excerpt ? 'post-excerpt' : 'post'}>
    <h2>{team.name}</h2>

    {excerpt && (
      <Link to={`/teams/${team.id}`} className="button">
        View Team
      </Link>
    )}
  </article>
)
