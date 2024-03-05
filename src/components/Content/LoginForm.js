import { Button, Container, Form } from "react-bootstrap";
import classes from "./LoginForm.module.css"
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const LoginForm = () => {
    const emailRef = useRef("")
    const passwordRef = useRef("")

    const history = useNavigate();

    const authCntx = useContext(AuthContext);

    const addUserHandler = async (enteredEmail, enteredPassword) => {
        try {
            const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAESowVGGv_4Mq7XTA0KSKy-_wQQFYIVOQ",{
                method : "POST",
                body : JSON.stringify ({
                    email : enteredEmail,
                    password : enteredPassword,
                    returnSecureToken : true
                }),
                headers : {
                    "Content-Type" : "application/json"
                }
            })

            const data = await response.json()
            if(response.ok){
                console.log(data);
                history('/store')
                authCntx.logIn(data.idToken)
            }else{
                let errorMessage = 'Authentication failed!'
                throw new Error(errorMessage)
            }

        } catch (error) {
            alert(error.message)
        }
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;

        addUserHandler(enteredEmail, enteredPassword)

        emailRef.current.value = ""
        passwordRef.current.value = ""
    }

    return (
        <Container className={classes.container}>
            <h2>Login</h2>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" ref={passwordRef} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </Container>
    )
}

export default LoginForm;