import React, { Component } from 'react';

import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap'

class DishDetail extends Component {
  constructor(props) {
    super(props);
    console.log('DishDetail constructor called...');
    this.state = {
    } 
  }

  renderDish(dish) {
    if(dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      )
    } else {
      return (
        <div></div>
      );
    }
  }

  renderComments(comments) {
    if(comments != null) {
        const cmnts = comments.map((comment) => {
        return <ul key={comment.id} className="list-unstyled">
          <p>{comment.comment}</p>
          <p>-- {comment.author}, {comment.date}</p>
        </ul>
      });
      return (
        cmnts
      );
    } else {
      return (
        <div></div>
      );
    }
  }

  render() {
    if (this.props.dish != null) {
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
              <CardBody>
                <CardTitle>{this.props.dish.name}</CardTitle>
                <CardText>{this.props.dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            {this.renderComments(this.props.dish.comments)}
          </div>
        </div>
      );
    }
    return (
      <div></div>
    );
  }
}

export default DishDetail;