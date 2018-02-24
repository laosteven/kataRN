import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  Platform,
  StatusBar
} from 'react-native';
import {
  RkText,
  RkCard,
  RkStyleSheet,
  RkTheme
} from 'react-native-ui-kitten';
import { Header } from 'react-navigation';

class Menu_Screen extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Guess who has 2 thumbs and is logged in.... YOU :D
        </Text>
      </View>
    )
  }
}


let styles = RkStyleSheet.create(theme => ({
  container: {
    backgroundColor: theme.colors.screen.scroll,
    justifyContent: 'center'
  },
}));

export default Menu_Screen;
