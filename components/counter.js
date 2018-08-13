import React, { Component } from "react";
import { View, Button, Text } from "react-native";
import { connect } from "react-redux";
import * as counterActions from "../actionCreators/counter";

class Counter extends Component {
  render() {
    return (
      <View>
        <Button title="INC" onPress={this.props.inc} />
        <Text>{this.props.ctr}</Text>
        <Button title="DEC" onPress={this.props.dec} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    ctr: state.counter,
    cars: state.cars,
    user: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    inc: () => dispatch(counterActions.incActionCreator(5)),
    dec: () => dispatch(counterActions.decActionCreator(5))
  };
}

const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
  );
  
  export default connectedComponent(Counter);
