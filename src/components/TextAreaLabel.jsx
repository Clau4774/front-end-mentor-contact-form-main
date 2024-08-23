import React from 'react'

function TextAreaLabel({labelText}) {
  return (
    <>
        <label htmlFor="textArea">{labelText}</label>
        <textarea id="textArea" rows="10">
        
        </textarea>
    </>
  )
}

export default TextAreaLabel
