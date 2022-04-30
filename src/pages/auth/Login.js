import classes from './Auth.module.css';
import logo from './logo.png';
import Input from "../components/Input";
import Button from "../components/Button";
import {useHistory} from "react-router-dom";

const Login = ({}) => {
	const history = useHistory();

	return (
		<div className={classes.centered}>
			<div className={classes.form}>
				<div className={classes.formBody}>
					<img src={logo} alt={'logo'} className={classes.logo}/>
					<div className={classes.gap}/>
					<Input className={classes.input} placeholder={'Login'}/>
					<div className={classes.gap}/>
					<Input className={classes.input} placeholder={'Password'} type={'password'}/>
					<div className={classes.gap}/>
					<Button kind={'primary'} caption={'Log in'} className={classes.button}/>
				</div>
				<div className={classes.formFooter}>
					<Button
						kind={'link-primary'}
						caption={'Sign Up'}
						className={classes}
						onClick={() => history.push('/register')}
					/>
					<Button
						kind={'link-primary'}
						caption={'Forgot Password?'}
						className={classes}
						onClick={() => alert('Not available, sorry')}
					/>
				</div>
			</div>
		</div>
	);
};

export default Login;