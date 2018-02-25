import React, { Component } from 'react';
import {
  View, Text
} from 'react-native';
import NavigatorService from './../utils/navigator';
import { RkStyleSheet, RkButton, RkText } from 'react-native-ui-kitten';
import { loginStatusChanged, authStateChanged } from '../actions';
import { connect } from 'react-redux';

class ThankYou_Screen extends Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    //this.props.authStateChanged(); PAY
  }
  cost() {
    return 50;
  }
  render() {
    return (
      <View style={styles.screen}>
        <Text>Your trip from {this.props.start_station} to {this.props.stop_station} costs you ${this.cost()}, you should recive an email to confirm</Text>
        <Text>Thank you for your patronage</Text>
        <RkButton
          rkType='large'
          style={styles.button}
          onPress={() => {
            NavigatorService.reset('main_screen');
          }}>Good Bye</RkButton>
      </View>
    )
  }
}

const mapStateToProps = ({ qr }) => {
  return { start_station: qr.onboard.stpName, stop_station: qr.deboard.stpName };
};

let styles = RkStyleSheet.create(theme => ({
  screen: {
    backgroundColor: theme.colors.screen.base,
    paddingVertical: 50,
    alignItems: 'center',
    flex: 1,
  },
  button: {
    marginTop: 25,
    marginHorizontal: 16,
    marginBottom: 25
  }
}));

export default connect(mapStateToProps, null)(ThankYou_Screen);