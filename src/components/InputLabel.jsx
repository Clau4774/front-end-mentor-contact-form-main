function InputLabel({labelContent, inputType, required}) {
  return (
    <>
        <label htmlFor="name">{labelContent}</label>
        <input type={inputType} required={required} />
    </>
  )
}

export default InputLabel
