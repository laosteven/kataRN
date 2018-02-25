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
  RkTheme,
  RkButton
} from 'react-native-ui-kitten';
import { Header } from 'react-navigation';
import NavigatorService from './../utils/navigator';
import MapView from 'expo';

class Menu_Screen extends Component {
  static navigationOptions = {
    title: 'KTA'
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <RkText>
          Welcome to KTA when prompted at a Transpod gate press button bellow for QR scan
        </RkText>
        <RkButton onPress={() => NavigatorService.navigate('board_scan')} >Board</RkButton>
      </View >
    );
  }
}

let styles = RkStyleSheet.create(theme => ({
  container: {
    backgroundColor: theme.colors.screen.scroll,
    justifyContent: "center"
  }
}));

export default Menu_Screen;
