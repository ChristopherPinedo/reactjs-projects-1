import React from 'react'

const TodoItem = ({title, description, completed}) => {
  return (
    <>
      <div> {title} </div>
      <div> {description} </div>
    </>
  )
}

export { TodoItem }