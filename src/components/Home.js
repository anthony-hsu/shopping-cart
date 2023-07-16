import React from 'react'

function Home(props) {
  return (
    <div className='div-home'>
      <h1>Welcome to {props.title}!</h1>
      <h3>Head over to our Shop to continue.</h3>
    </div>
  )
}

export default Home