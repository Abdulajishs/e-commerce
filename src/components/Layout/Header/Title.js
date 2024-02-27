import { Card } from "react-bootstrap";
import classes from "./Title.module.css"
const Title = () => {
    return (
        <Card className="text-center">
            <Card.Header className={classes.cardHeaderCustom}> The Generics</Card.Header>
        </Card>
    )
}

export default Title;