import React, { Component } from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import {CardLink,Card,CardImg,CardBody,CardText,CardTitle,CardSubtitle,Button} from 'reactstrap';
import {isMobile} from 'react-device-detect';
import one from './assets/1.jpg';
import {Link} from 'react-router-dom';
 
export default class ComingSoonItems extends Component {

  constructor(props){
    super(props);
    this.state={}
  }
 
  componentWillMount() {
    this.setState({
      children: [],
      activeItemIndex: 0,
    });
 
    setTimeout(() => {
      this.setState({
        children: this.createChildren(20),
      })
    }, 100);
  }

  createChildren = n => range(n).map(i => 
    
  <Link style={{color:'black'}} to="/items/getItemDetails" key={i}>
    <Card style={{border:'transparent',marginBottom:'0px'}}>
    <CardImg top width="100%" src={one}/>
    <CardBody >
      <CardSubtitle style={{textOverflow:'ellipsis',fontSize:isMobile ? '10px' : '14px'}}>
        Funky Designer T-Shirts
        <span style={{float:'right',color:'red'}} className="fa fa-heart"></span>
      </CardSubtitle>
      <CardText>
      
     
      <span style={{color:'gold'}} className="fa fa-star"></span>{" "}
      <span style={{color:'gold'}} className="fa fa-star"></span>{" "}
      <span style={{color:'gold'}} className="fa fa-star"></span>{" "}
      <span style={{color:'gold'}} className="fa fa-star"></span>{" "}
      <span style={{color:'gold'}} className="fa fa-star"></span>{" "} 
    
     

      <br/>
      <span style={{textDecoration:'line-through',color:'grey',fontSize:isMobile ? '10px' : '10px'}}>INR 999</span>{' '}
      <span style={{fontSize:isMobile ? '10px' : '10px'}}>INR 499</span>{' '}
      <span style={{color:'teal',fontSize:isMobile ? '10px' : '10px'}}>50% discount</span>
      <Button style={{margin:isMobile ? '0px 0px':'5px 20px',color:'#ffff'}} size="sm" color="warning">Add Cart</Button>{" "}
      <Button style={{color:'#ffff'}} size="sm" color="info">Buy Now</Button>
      </CardText> 
    </CardBody>
  </Card>
  </Link> 
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
        //placeholderItem={ <span></span> }
 
        // Carousel configurations
        numberOfCards={isMobile ? 2:5}
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