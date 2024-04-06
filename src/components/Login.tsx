import {useState} from "react"

interface LoginProps {
    storedUsers: string[][];
}

const Login = ({storedUsers}: LoginProps) => {

    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [hidden, setHidden] = useState("password")

    const handleEmailChange = (event) => {
        setEmailInput(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPasswordInput(event.target.value)
    }

    const handleSubmission = () => {
        console.log(emailInput)
        console.log(passwordInput)
    }

    return (
        <form>
            <div className="mb-3">
                <label htmlFor="emailInput" className="form-label text-white">Email address</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="emailInput"
                    value={emailInput}
                    onChange={handleEmailChange}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="passwordInput" className="form-label text-white">Password</label>
                <input 
                    type={hidden} 
                    className="form-control" 
                    id="passwordInput"
                    value={passwordInput}
                    onChange={handlePasswordChange}
                />
            </div>

            <div className="mb-3 form-check">
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

            <button type="submit" className="btn btn-primary" onClick={handleSubmission}>Submit</button>
        </form>
    );
}

export default Login;