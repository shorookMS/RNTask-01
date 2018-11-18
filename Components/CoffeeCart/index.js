import React, { Component } from "react";

// NativeBase Components
import {
  Text,
  Left,
  Body,
  Right,
  List,
  Button,
  ListItem,
  Icon
} from "native-base";

import { connect } from "react-redux";

class CoffeeCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          drink: "Latte",
          option: "Small",
          quantity: 2
        },
        {
          drink: "Espresso",
          option: "Large",
          quantity: 1
        }
      ]
    };
  }
  renderItem(item, index) {
    return (
      <ListItem key={index}>
        <Left>
          <Text style={{ color: "white", marginLeft: 16 }}> {item.drink} </Text>
          <Text note style={{ marginLeft: 16 }}>
            {item.option}
          </Text>
        </Left>
        <Body>
          <Text style={{ color: "white" }}>{item.quantity}</Text>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="trash" style={{ color: "white", fontSize: 21 }} />
          </Button>
        </Right>
      </ListItem>
    );
  }

  render() {
    const { list } = this.props;
    return (
      <List>
        {list.map((item, index) => this.renderItem(item, index))}
        <Button full danger>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

const mapStateToProps = state => ({
  list: state.cart.list
});

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoffeeCart);
