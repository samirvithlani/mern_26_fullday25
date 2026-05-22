import React from 'react'

export const MyButton = (props) => {
  return (
    <button>{props.name || "test"}</button>
  )
}
