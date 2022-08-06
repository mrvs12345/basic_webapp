import React, { useState, useEffect } from 'react'

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch('/members').then(
      response => response.json()
    ).then(
      data => {
        setData(data)
        console.log('data recieved', data)
      }
    )
  }, [])



  return (
    <div>

      {(typeof data.members === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        data.members.map((member, i) => (
          <p key={i}>{member}</p>
        ))
      )}
      
    </div>
  )
}

export default App
