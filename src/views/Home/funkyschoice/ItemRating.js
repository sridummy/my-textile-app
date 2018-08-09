import React, { Component } from 'react';

class ItemRating extends Component {
    state = {}

rating = () => {
    console.log(this.props.rating);
    alert(this.props.rating);
}


    render() { 
        const { rating } = this.rating;
        return ( 
            <span>
               {rating}
            </span>
         )
    }
}
 
export default ItemRating;