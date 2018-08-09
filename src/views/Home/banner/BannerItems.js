import React, { Component } from 'react';
import banner from './assets/banner1.jpg';
import {isMobile} from 'react-device-detect';
import {
  Card, CardTitle, CardText, Button, Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
const items = [ 
  {
    src: banner,
    id:1,
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
    src: banner,
    id:2,
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: banner,
    id:3,
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
];

class BannerItems extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const slides = items.map((item) => {
      return (
        <CarouselItem
          style={{height:'400px',width:'100%'}}
          //className="custom-tag"
          tag="div"
          key={item.id}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          <img style={{width:'100%'}} src={banner} alt={item.altText} />
          <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <div>
        <style>
          {
            `.custom-tag {
                  max-width: 100%;
                  height: 400px;
                  background: white;
                }`
          }
        </style>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    )
  }
}

export default BannerItems;