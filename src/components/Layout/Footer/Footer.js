import { Card} from "react-bootstrap";
import classes from "./Footer.module.css";

const Footer = () => {

    return (
        <Card.Footer className={`text-center ${classes.cardFooterCustom}`}>
            <div className={classes.footerContent}>
                <div className={classes.cardHeaderCustom}>The Generics</div>
                <div>
                    <a href="https://www.youtube.com/">Youtube</a> | <a href="https://spotify.com/">Spotify</a> | <a href="https://facebook.com/">Facebook</a>
                </div>
            </div>
        </Card.Footer>
    )
}

export default Footer;