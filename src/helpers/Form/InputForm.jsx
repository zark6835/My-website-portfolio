import { Field } from "formik";

const InputForm = ({name, as, type, className}) => (
    <Field name={name} type={type} as={as} className={className}/>
)
export default InputForm;