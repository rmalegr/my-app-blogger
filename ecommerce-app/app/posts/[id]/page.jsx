import React from 'react'

const Postdinamico = ({params}) => {
  const  {id} = params
  return (
    <div>
      <h1>Ese es un post {id}</h1>
    </div>
  )
}

export default Postdinamico