import React, { Component } from "react";
import CheckList from "./checkList";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false
    };
  }

  toggleDetailOnClick() {
    this.setState({ showDetails: !this.state.showDetails });
  }

  render() {
    let cardDetails;
    if (this.state.showDetails) {
      cardDetails = (
        <div className='card__details'>
          {this.props.description}
          <CheckList cardId={this.props.id} tasks={this.props.tasks} />
        </div>
      );
    }
    return (
      <div className='card'>
        <div
          className='card__title'
          onClick={() => this.toggleDetailOnClick()}
        >
          {this.props.title}
        </div>
        {cardDetails}
      </div>
    );
  }
}

export default Card;
