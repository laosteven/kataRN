import React, { Component } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  Platform,
  StatusBar,
  Button,
  StyleSheet
} from 'react-native';
import {
  RkText,
  RkCard,
  RkStyleSheet,
  RkButton,
  RkTheme
} from 'react-native-ui-kitten';
import { Header } from 'react-navigation';
import NavigatorService from './../utils/navigator';
import MapView from 'expo';
import { connect } from 'react-redux';
import CardModal from '../components/CardModal'
import { Components, Constants } from 'expo';
import { UtilStyles } from '../style/styles';

class Menu_Screen extends React.Component {
  static navigationOptions = {
    title: 'KTA'
  };

  constructor(props) {
    super(props);

    this.state = { payment_modal: false }
  }

  render() {
    console.log(this.props.card)
    if (this.props.card) {

      return (
        <View style={styles.container}>
          <RkText>
            Welcome to KTA when prompted at a Transpod gate press button bellow for QR scan
        </RkText>
          <RkButton onPress={() => NavigatorService.navigate('board_scan')} >Board</RkButton>
        </View >
      );
    }
    return (<View style={styles.container}>
      <RkText>
        We do not have a pay method for you on file please update
        </RkText>
      <RkButton onPress={() => { this.setState({ payment_modal: true }) }} >Add Payment Method</RkButton>
      <CardModal payment_modal={this.state.payment_modal} _closeModal={this._closeModal.bind(this)} />
    </View >)
  }

  _closeModal() {
    this.setState({ payment_modal: false });
  }
}

let styles = RkStyleSheet.create(theme => ({
  container: {
    backgroundColor: theme.colors.screen.scroll,
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1"
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e"
  }
}));

const mapStateToProps = ({ settings }) => {
  const { card } = settings;
  return { card };
};

export default connect(mapStateToProps, null)(Menu_Screen);
