import React , {Component} from "react"

class SignInUp extends Component{
	constructor(){
		super()
		this.state = {
			showIn : true,
			showUp : false
		}
	}
	getSignForm(){

		if(this.state.showIn){
			return(
				<form class="form-detail formIn" action="#" method="post" autoComplete="off">
				<h2>LogIn</h2>
				<div class="form-row">
					<input type="text" name="your-email" id="your-email" class="input-text" placeholder="Email Address" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"/>
				</div>
				<div class="form-row">
					<input type="password" name="password" id="password" class="input-text" placeholder="Password" required />
				</div>
				<div class="form-row-last">
					<input type="submit" name="register" class="register" value="Log In" />
				</div>
			</form>
			)
		}else if(this.state.showUp){
			return(
				<form className="form-detail formOut"  action="#" method="post" autoComplete="off" >
				<h2>Register Form</h2>
				<div class="form-row">
					<input type="text" name="full-name" id="full-name" class="input-text" placeholder="Your Name" required />
				</div>
				<div class="form-row">
					<input type="text" name="your-email" id="your-email" class="input-text" placeholder="Email Address" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"/>
				</div>
				<div class="form-row">
					<input type="password" name="password" id="password" class="input-text" placeholder="Password" required />
				</div>
				<div class="form-row">
					<input type="password" name="comfirm-password" id="comfirm-password" class="input-text" placeholder="Comfirm Password" required />
				</div>
				<div class="form-row-last">
					<input type="submit" name="register" class="register" value="Register" />
				</div>
			</form>
			)
		}
	}
	signInForm(){
		this.setState({
			showIn : true,
			showUp : false
		})
	}
	signUpForm(){
		this.setState({
			showIn : false,
			showUp : true
		})
	}
    render(){
        return(
			<div class="page-content">
            <div class="form-v6-content">
            <div class="form-left">
                <img src="images/logo.png" alt="form" />
            </div>
			<div className="barSign">
				<button onClick={this.signInForm.bind(this)} className="btnIn btn btn-primary">SignIn</button>
				<button onClick={this.signUpForm.bind(this)} className="btnUp btn btn-primary">SignUp</button>
			</div>
			{this.getSignForm()}
		
            </div>
			</div>
        )
    }
}
export default SignInUp