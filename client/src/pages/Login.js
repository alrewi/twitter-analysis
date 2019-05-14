import React, {Component} from "react"
import loginAPI from "../utils/loginAPI"
import {Wrapper, Container, LoginForm} from "../components/LoginComponent";
import {Link} from "react-router-dom"



class Login extends Component {

    state = {
        username: "",
        password: "",
        isAuthenticated: false

    }

    componentDidMount = () => {

        // loginAPI.checkSession()
        // .then((res)=> {
        //     if(res.data){
        //         return this.setState({isAuthenticated: true})
        //     }
        // })
        // .catch((err) => console.log(err))

    }


    // userHasAuthenticated = (authenticated) => {
    //     this.setState({ isAuthenticated: authenticated });
    //   }

    onChangeHandler = (event) => {
        let {name, value} = event.target

        this.setState({[name]: value})
    }


    loginHandler = (event) => {
        event.preventDefault()
        let loginObj = {
            username: this.state.username,
            password: this.state.password
        }
        loginAPI.login(loginObj)
        .then((res)=> {
            this.props.doLogin(this.state.username);
        })
        .catch((err) => {
            alert("Wrong username/password")
            console.log(err)})
    }

    render(){
        return(
            <Wrapper>
                <Container>
                    <LoginForm>
<<<<<<< HEAD
                        <h1>LOG IN</h1>

                        <form onSubmit={this.loginHandler}>
                        <div className="inputbox">
                            <input type="text" name="username" placeholder="@username" autocomplete = "off" value={this.state.username} onChange={this.onChangeHandler}/>
=======
                        <h1>Login</h1>
                        <Link className="createbtn" to="/signup">or Sign Up</Link>
                        <form onSubmit={this.loginHandler}>
                        <div className="inputbox">
                            <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.onChangeHandler}/>
>>>>>>> master
                        </div>

                        <div className="inputbox">
                            <input type="password" name="password" placeholder="password" autocomplete = "off" value={this.state.password} onChange={this.onChangeHandler}/>
                        </div>
<<<<<<< HEAD

                        <input className="loginbtn" type="submit" name="" value="LOG IN" />

=======
            
                        <input className="loginbtn btn" type="submit" name="" value="Login" />
            
>>>>>>> master
                        </form>
                    </LoginForm>
                </Container>
            </Wrapper>
<<<<<<< HEAD

=======
>>>>>>> master
        )
    }
}


export default Login
