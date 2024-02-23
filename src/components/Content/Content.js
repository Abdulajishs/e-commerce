import { Card } from "react-bootstrap";

const Content = () => {
  const cardHeaderStyle = {
    fontSize: '6em',
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'sans',
    backgroundColor: '#777777',
    padding: "0px 20px 75px 20px"

  }
  return (
    <>
      <Card className="text-center">
        <Card.Header style={cardHeaderStyle}> The Generics</Card.Header>
      </Card>
      
    </>
  )
}

export default Content;