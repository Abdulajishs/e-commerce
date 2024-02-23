import { Card } from "react-bootstrap";

const Footer =()=>{
    const cardHeaderStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'sans',
    
      }     
    return (
        <Card.Footer className="text-center" style={{ position: "fixed", bottom: 0, width: "100%", background: "#56CCF2", padding: "20px 0" }}>
            <div style={cardHeaderStyle}>The Generics
            <a href="https://www.youtube.com/">Youtube</a> | <a href="https://spotify.com/">Spotify</a> | <a href="https://facebook.com/">Facebook</a>
            </div>
        </Card.Footer>
    )
}

export default Footer;