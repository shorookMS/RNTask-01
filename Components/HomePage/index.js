import React, { Component } from "react";
import { View } from "react-native";

// NativeBase Components
import { Container, Header } from "native-base";

// Style
import styles from "./styles";

// Components
import CoffeeList from "../CoffeeList";
import CoffeeCart from "../CoffeeCart";
import CoffeeDetail from "../CoffeeDetail";
import Login from "../Login";
import * as actionCreators from "../../store/actions";
import { connect } from "react-redux";

class HomePage extends Component {
  componentDidMount() {
    if (this.props.coffeeshops === null) this.props.fetchShops();
  }
  render() {
    return (
      <Container style={styles.transparent}>
        <View style={styles.overlay} />
        <Header style={styles.transparent} />
        <CoffeeList />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  coffeeshops: state.coffee.coffeeshops,
  loading: state.coffee.coffeeshops
});

const mapDispatchToProps = dispatch => {
  return {
    fetchShops: () => dispatch(actionCreators.getCoffeeShops())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
