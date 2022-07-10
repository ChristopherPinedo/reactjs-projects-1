import React from 'react'

const TodoList = (props) => {
  return (
    <>
      <div>TodoList</div>
      {props.children}
    </>
  )
}

export { TodoList }