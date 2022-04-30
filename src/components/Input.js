import {noop} from "lodash-es";
import classes from './Input.module.css';

const Input = ({
	               placeholder,
	               value,
	               onChange,
	               type,
               }) => (
	<input
		className={classes.input}
		placeholder={placeholder}
		type={type}
		onChange={(evt) => (onChange || noop)(evt.target.value)}
		value={value}
	/>
)

export default Input;