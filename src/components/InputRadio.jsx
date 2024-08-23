function InputRadio({radioValue, inputName,labelContent, radioId}) {
  return (
    <>
    <div>
      <input type="radio" id={radioId} name={inputName} value={radioValue}/>
      <label htmlFor={radioId}>{labelContent}</label>
    </div>
    </>
  )
}

export default InputRadio
