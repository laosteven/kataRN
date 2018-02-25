import React, { Component } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  Platform,
  StatusBar,
  Button,
  StyleSheet,
  Dimensions
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
import { scaleModerate } from '../utils/scale';
import Icon from 'react-native-vector-icons/FontAwesome';

class Menu_Screen extends React.Component {
  static navigationOptions = {
    title: 'Kata'
  };

  constructor(props) {
    super(props);
  }

  render() {

    let contentHeight = scaleModerate(375, 1);
    let height = Dimensions.get('window').height - contentHeight;
    let width = Dimensions.get('window').width;
    let height_sub = height / 2;
    let width_sub = width - 40;

    image = <Image style={[styles.image, { height, width }]} source={require('../assets/images/backgroundLoginV6.png')} />;

    return (
      <View style={styles.screen}>

        {image}
        
        <RkText style={styles.paragraph}>
          Welcome to Kata! {"\n"}{"\n"}

          When prompted at a Transpod gate: {"\n"}
          press the button below for a QR scan.
        </RkText>

        <RkButton
          style={[{ width: 100, justifyContent: 'flex-start', paddingLeft: 15 }, UtilStyles.spaceVertical]}
          onPress={() => this.props.navigation.navigate('board_scan')}
          rkType='large rounded info'>
          <Icon style={[UtilStyles.icon, UtilStyles.iconRound]} name={'train'} size={24} />
          <RkText rkType='caption'>Board</RkText>
        </RkButton>

      </View >
    );
  }
}

let styles = RkStyleSheet.create(theme => ({
  container: {
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
  },
  screen: {
    backgroundColor: theme.colors.screen.base,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1
  }
}));

export default Menu_Screen;
