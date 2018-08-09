import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import {CardTitle,CardText, Card, Container, Row, Col, CardImg } from 'reactstrap';
// import 'react-image-lightbox/style.css';
import './itemdetails.css';
import hor from './assets/horizontal.jpg';
import one from './assets/1.jpg';
import two from './assets/2.jpg';
import three from './assets/3.jpg';
import four from './assets/4.jpg';
import five from './assets/5.jpg';
import six from './assets/6.jpg';
import {isMobile} from 'react-device-detect';
import MobileGetItemDetails from './MobileGetItemDetails';

class ItemDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }
    render() {
        const { photoIndex, isOpen } = this.state;
        const images = [
            one,
            two,
            three,
            four,
            five,
            six
        ];
        return (
            <div>

                <div>
                    {
                        isMobile ? 
                        <div style={{ marginLeft: '-30px', marginRight: '-30px'}}>
                        <Card body  onClick={() => this.setState({ isOpen: true })}>
                        <CardTitle><h1>Popular</h1></CardTitle>
                        <CardText>
                        <MobileGetItemDetails/>
                        </CardText>
                        </Card>
                        </div>
                        :
                        <Card
                            onClick={() => this.setState({ isOpen: true })}
                        >
                            <CardImg top width="100%" src={hor} />
                        </Card>

                    }

                </div>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            </div>
        )
    }
}

export default ItemDetails;