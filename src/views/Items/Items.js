import React, { Component } from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,CardColumns,CardDeck,
    CardSubtitle, CardBody, Badge, CardFooter, CardHeader, Col, Row, Collapse, Fade
} from 'reactstrap';
import { AppSwitch } from '@coreui/react'
import sample from './assets/sample.jpeg';
import one from './assets/vertical.jpg';
import two from './assets/horizontal.jpg';
import { isMobile } from 'react-device-detect';

class Items extends Component {




    render() {
        const data = ["","","","","","","","","","","","","","","","","","","",""];
       // const data = [{name:"ganesha",rating:5},{name:"shiva",rating:5},{name:"hanuman",rating:5}]
        const cards = data.map((item,index) => {
             
          return  isMobile ? <div key={index} style={{ width: isMobile ? '100%':'20%'}}>
                <Card  style={{ margin: '2px -10px'}}>
                <Row>
                    <Col>
                    <CardImg top width="100%" src={two} />
                    </Col>
                    {/* <Col>
                    <CardBody>
                        <CardSubtitle>{item.name}</CardSubtitle>
                        <br />
                        <Button>Button</Button>
                    </CardBody>
                    </Col> */}
                </Row>  
                </Card>
            </div> 
            :    
            <div key={index} style={{ width: isMobile ? '100%':'20%'}}>
            <Card  style={{ margin: '10px'}}>
                <CardImg top width="100%" src={one}  />   
                {/* <CardBody>
                    <CardSubtitle>{item.name}</CardSubtitle>
                    <br />
                    <Button>Button</Button>
                </CardBody>   */}
            </Card>
        </div>
        })
            
               
      

        return (
            <div className="animated fadeIn">
               <CardDeck>
               {cards}
               </CardDeck>  
            </div>
        )
    }
}

export default Items;