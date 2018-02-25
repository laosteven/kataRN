import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import { RkStyleSheet } from 'react-native-ui-kitten';
import NavigatorService from './../utils/navigator';

class Waiting_Room_Screen extends Component {

  static navigationOptions = {
    title: "Waiting Room",
  };

  static defaultProps = {
    station: "bob"
  };

  constructor(props) {
    super(props);
    this.state = { time: 30 };
  }
  tick() {
    if (this.state.time === 0) {
      NavigatorService.navigate('travel')
    }
    this.setState(prevState => ({
      time: prevState.time - 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    let str = "Your Train will arrive in: " + this.state.time + " Minute"
    str = this.state.time < 2 ? str.concat("") : str.concat("s")
    return (
      <View style={styles.screen}>
        <Text>Welcome to the {this.props.station} station</Text>
        <Text>{str}</Text>
      </View>
    )
  }
}

const mapStateToProps = ({ qr }) => {
  const { stpName } = qr.onboard;

  return { station: stpName };
};

let styles = RkStyleSheet.create(theme => ({
  screen: {
    backgroundColor: theme.colors.screen.base,
    paddingVertical: 0,
    alignItems: 'center',
    flex: 1,
  },
  button: {
    marginTop: 25,
    marginHorizontal: 16,
    marginBottom: 25
  }
}));

export default connect(mapStateToProps, null)(Waiting_Room_Screen);
