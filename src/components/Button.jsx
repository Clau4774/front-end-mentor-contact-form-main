import React from 'react'

function Button({buttonType, contentValue}) {
  return (
    <button type={buttonType}>
      {contentValue}
    </button>
  )
}

export default Button
