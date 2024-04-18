import {SetStateAction, useState} from "react"

interface LoginProps {
    storedUsers: string[][];
}

const Login = ({storedUsers}: LoginProps) => {

    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [hidden, setHidden] = useState("password")
    const [signUp, setSignUp] = useState(false)

    const handleEmailChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setEmailInput(event.target.value);
    }

    const handlePasswordChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setPasswordInput(event.target.value)
    }

    const handleSubmission = () => {
        console.log(emailInput)
        console.log(passwordInput)
    }

    return (
        <div className="mx-5">
        <form className="border border-4 rounded-4">

            <div className="row text-white mt-4">
            <div className="col-5">
            {signUp === false ? 
            <h1 className="text-center display-4">Log in</h1> : 
            <h1 className="text-center display-4">Sign up</h1>}

            <div className="my-3 mx-5">
                <label htmlFor="emailInput" className="form-label">Email address</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="emailInput"
                    value={emailInput}
                    onChange={handleEmailChange}
                />
            </div>

            <div className="mb-3 mx-5">
                <label htmlFor="passwordInput" className="form-label">Password</label>
                <input 
                    type={hidden} 
                    className="form-control" 
                    id="passwordInput"
                    value={passwordInput}
                    onChange={handlePasswordChange}
                />
            </div>
            </div>
            {! signUp &&
            <div className="col me-5">
                <h1 className="display-3"><b><s>No Account,</s> No Problem:</b></h1>
                <br/>
                <h5>Sign up today to have your say in the GOAT debate. Its as easy as a two-yard tap-in!</h5>
                <br/>
                <h5> Simply <a href="#Log in" onClick={() => {setSignUp(true)}}>click here</a> to create an account!</h5>
            </div>
            }
            {signUp &&
            <div className="col me-5">
                <h1 className="display-3"><b>Already have an Account?</b></h1>
                <br/>
                <h5>Get straight to the point. Vote on who you think is the better baller right now!</h5>
                <br/>
                <h5><a href="#Log in" onClick={() => {setSignUp(false)}}>click here</a> to log into your account!</h5>
            </div>
            }
            </div>

            <div className="mb-3 mx-5 form-check">
                <input 
                    type="checkbox" 
                    className="form-check-input" 
                    id="exampleCheck1"
                    onClick={() => {
                        hidden === "password" ? setHidden("text") : setHidden("password")
                    }}
                />
                <label className="form-check-label text-white" htmlFor="exampleCheck1">Show my password</label>
            </div>

            <button type="button" className="btn btn-primary mx-5 mb-5" onClick={handleSubmission}>Submit</button>
        </form>
        </div>
    );
}

export default Login;