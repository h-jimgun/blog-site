import React from 'react'

function Article({ title, date, preview }) {
    const displayDate = date || "January 1, 2024";

  return (
    <article>
      <h3>{title}</h3>
      <small>{displayDate}</small>
      <p>{preview}</p>
    </article>
  )
}

export default Article