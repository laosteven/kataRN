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
import { Components, Constants } from 'expo'; 
import { UtilStyles } from '../style/styles'; 

class Menu_Screen extends React.Component { 
  static navigationOptions = {
    title: 'Kata'
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
         <RkButton rkType='rounded' onPress={() => NavigatorService.navigate('qr_scan')} style={UtilStyles.spaceVertical}>Board</RkButton> 
         <RkButton rkType='rounded' onPress={() => NavigatorService.navigate('settings_screen')} style={UtilStyles.spaceVertical}>Settings</RkButton> 
      </View>
    );
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

export default Menu_Screen;
