import React from 'react'

function About({ image, about }) {
   const displayImage = image || "https://via.placeholder.com/215";

  return (
    <aside>
      <img src={displayImage} alt="blog logo" />
      <p>{about}</p>
    </aside>
  )
}

export default About