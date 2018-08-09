import React, { Component } from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import {Card,CardImg,CardBody,CardText,CardTitle,CardSubtitle,Button} from 'reactstrap';
import {isMobile} from 'react-device-detect';
import one from './assets/1.jpg';
import ItemRating from './ItemRating';
 
export default class FunkyItems extends Component {
 
  componentWillMount() {
    this.setState({
      children: [],
      activeItemIndex: 0,
      rating:5
    });
 
    setTimeout(() => {
      this.setState({
        children: this.createChildren(20),
      })
    }, 100);
  }

  rating = () => {
    return (<div>
      <i className="fa fa-star" style={{color:'gold'}}></i>{' '}
        <i className="fa fa-star" style={{color:'gold'}}></i>{' '}
        <i className="fa fa-star" style={{color:'gold'}}></i>{' '}
        <i className="fa fa-star" style={{color:'gold'}}></i>{' '}
        <i className="fa fa-star" style={{color:'gold'}}></i>
    </div>);
  }
 
  createChildren = n => range(n).map(i => 
    <Card style={{border:'transparent'}} key={i}>
    <CardImg top width="100%" src={one} />
    <CardBody>
      <CardSubtitle>Ganapathi bappa T-shirts</CardSubtitle>
      <CardText>
        <ItemRating rating={this.state.rating}/>
      </CardText>
      {/* <Button>Button</Button> */}
    </CardBody>
  </Card>
  );
 
  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });
 
  render() {
    const {
      activeItemIndex,
      children,
    } = this.state;
 
    return (
      <ItemsCarousel
        // Placeholder configurations
        enablePlaceholder
        numberOfPlaceholderItems={20}
        minimumPlaceholderTime={1000}
        placeholderItem={<div></div> }
 
        // Carousel configurations
        numberOfCards={isMobile ? 2 : 5}
        gutter={5}
        showSlither={false}
        firstAndLastGutter={false}
        freeScrolling={isMobile?true:false}
 
        // Active item configurations
        requestToChangeActive={this.changeActiveItem}
        activeItemIndex={activeItemIndex}
        activePosition={'center'}
 
        chevronWidth={24}
        rightChevron={<i className="fa fa-chevron-right" style={{backgroundColor:'#ffff',fontSize:'30px',padding:'20px 5px',marginLeft:'50px'}}></i>}
        leftChevron={<i className="fa fa-chevron-left" style={{backgroundColor:'#ffff',fontSize:'30px',padding:'20px 5px',marginRight:'50px'}}></i>}
        outsideChevron={false}
      >
        {children}
      </ItemsCarousel>
    );  
  }
} 