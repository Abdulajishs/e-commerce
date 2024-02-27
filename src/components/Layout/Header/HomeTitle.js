import {  Container } from "react-bootstrap";
import classes from "./HomeTitle.module.css"
const HomeTitle = () => {
    return (
        <Container fluid className={classes.flexContainer}>
            <div >
                <header className={classes.cardHeaderCustom}> The Generics</header>
            </div>
            <div > <button className={classes.button}>Get Our Latest Album</button></div>
            <div >  <button className={classes.button}>play</button></div>
        </Container >
    )
}

export default HomeTitle;