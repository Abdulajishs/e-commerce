import { Button, Container, Table } from "react-bootstrap";
import classes from "./HomeContent.module.css"

const HomeContent = () => {
    return (
        <Container className={classes.container}>
            <h2 className={classes.heading}>TOURS</h2>
            <Table >
                <tbody>
                    <tr>
                        <td>JUL16</td>
                        <td>DETROIT, MI</td>
                        <td>DTE ENERGY MUSIC THEATRE</td>
                        <td><Button className={classes.button}>BUY TICKETS</Button></td>
                    </tr>
                    <tr>
                        <td>JUL19</td>
                        <td>TORONTO,ON</td>
                        <td>BUDWEISER STAGE</td>
                        <td><Button variant="primary" className={classes.button}>BUY TICKETS</Button></td>
                    </tr>
                    <tr>
                        <td>JUL 22</td>
                        <td>BRISTOW, VA</td>
                        <td>JIGGY LUBE LIVE</td>
                        <td><Button variant="primary" className={classes.button}>BUY TICKETS</Button></td>
                    </tr>
                    <tr>
                        <td>JUL 29</td>
                        <td>PHOENIX, AZ</td>
                        <td>AK-CHIN PAVILION</td>
                        <td><Button variant="primary" className={classes.button}>BUY TICKETS</Button></td>
                    </tr>
                    <tr>
                        <td>AUG 2</td>
                        <td>LAS VEGAS, NV</td>
                        <td>T-MOBILE ARENA</td>
                        <td><Button variant="primary" className={classes.button}>BUY TICKETS</Button></td>
                    </tr>
                    <tr>
                        <td>AUG 7</td>
                        <td>CONCORD, CA</td>
                        <td>CONCORD PAVILION</td>
                        <td><Button variant="primary" className={classes.button}>BUY TICKETS</Button></td>
                    </tr>
                </tbody>
            </Table>
        </Container >
    )
}
export default HomeContent;