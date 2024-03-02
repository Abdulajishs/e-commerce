import { Button, Container, Form } from "react-bootstrap";
import classes from "./UserForm.module.css"
import { useRef } from "react";

const UserForm = (props) => {
    const nameRef = useRef("");
    const emailRef = useRef("");
    const numberRef = useRef("");

    const submitHandler = (event)=>{
        event.preventDefault();
        const userDetails = {
            name : nameRef.current.value,
            email : emailRef.current.value,
            number : numberRef.current.value,
        }
        addUserHandler(userDetails);

        nameRef.current.value = "";
        emailRef.current.value = "";
        numberRef.current.value = "";
    }

    const addUserHandler = async (userDetails)=>{
        const response = await fetch("https://react-http-4b164-default-rtdb.firebaseio.com/users.json",{
            method:"POST",
            body : JSON.stringify(userDetails),
            headers : {
                "Content-Type" : "application/json"
            }
        })

        const data = await response.json()
        console.log(data);
    }

    return (
        <Container className={classes.container}>
        <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name"  ref={nameRef} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email ID</Form.Label>
                <Form.Control type="email" placeholder="Enter email" ref={emailRef} required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Phone number</Form.Label>
                <Form.Control type="number" placeholder="Phone number" ref={numberRef} required />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </Container>
    )
}

export default UserForm;