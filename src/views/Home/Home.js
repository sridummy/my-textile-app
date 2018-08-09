import React, { Component } from 'react';
import { UncontrolledCarousel, Card, CardTitle, CardText, Button } from 'reactstrap';
import ComingSoonItems from './comingsoon/ComingSoonItems';
import PopularItem from './popular/PopularItems';
import FunkyItems from './funkyschoice/FunkyItems';
import BannerItems from './banner/BannerItems';

class Home extends Component {
  state = {}
  render() {

    return (
      <div style={{ marginTop: '10px', marginLeft: '-30px', marginRight: '-30px', height: '50%' }}>
        <BannerItems />
        <div style={{ marginTop: '10px' }}>
          <Card body >
            <CardTitle style={{fontSize:'30px'}}>Coming Soon</CardTitle>
            {/* <CardText> */}
              <ComingSoonItems />
            {/* </CardText> */}
          </Card>
        </div>
        <div style={{ marginTop: '10px' }}>
          <Card body >
            <CardTitle style={{fontSize:'30px'}}>Popular</CardTitle>
            {/* <CardText> */}
              <PopularItem />
            {/* </CardText> */}
          </Card>
        </div>
        <div style={{ marginTop: '10px' }}>
          <Card body >
            <CardTitle style={{fontSize:'30px'}}>Funky's Choice...</CardTitle>
            {/* <CardText> */}
              <FunkyItems />
            {/* </CardText> */}
          </Card>
        </div>
      </div>
    )
  }
}

export default Home;