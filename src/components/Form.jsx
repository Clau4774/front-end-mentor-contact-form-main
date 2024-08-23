import Button from "./Button";
import FormTitle from "./FormTitle";
import InputLabel from "./InputLabel";
import InputRadio from "./InputRadio";

function Form() {

    const formTitle = "Contact Us";
    const labelName = "First Name *";
    const inputNameType = "text";
    const labelLastName = "Last Name *";
    const inputLastNameType = "text";
    const labelEmail = "Email Address *";
    const inputEmail = "email";
    const radioName = "query-type";
    
  return (
    <form>
      <FormTitle title={formTitle}/>
      <InputLabel  labelContent={labelName} inputType={inputNameType} />
      <InputLabel labelContent={labelLastName} inputType={inputLastNameType}/>
      <InputLabel labelContent={labelEmail} inputType={inputEmail} required/>
      <p>Query Type *</p>
      <InputRadio radioId="radioOption1" radioValue="1" inputName={radioName} labelContent="General Enquiry"/>
      <InputRadio radioId="radioOption2" radioValue="2" inputName={radioName} labelContent="Support Request"/>
      <InputLabel labelContent="Message *"/>
      <Button buttonType="submit" contentValue="Submit" inputType="submit"/>
    </form>
  )
}

export default Form
