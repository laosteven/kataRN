import Expo from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import NavigatorService from './utils/navigator';
import {
  RkTheme
} from 'react-native-ui-kitten';

import Welcome_Screen from './screens/Welcome_Screen';
import Profile_Screen from './screens/Profile_Screen';
import Login_Screen from './screens/Login_Screen';
import Register_Screen from './screens/Register_Screen';
import Reset_Screen from './screens/Reset_Screen';
import Menu_Screen from './screens/Menu_Screen';
import QrScan_Screen from './screens/QrScan_Screen';
import Settings_Screen from './screens/Settings_Screen';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  }
  componentWillMount() {

    firebase.initializeApp({
      apiKey: "AIzaSyCzt6SefehE6JmmQdTaZ0t9B2DfyvwJC9k",
      authDomain: "ktaa-13a11.firebaseapp.com",
      databaseURL: "https://ktaa-13a11.firebaseio.com",
      projectId: "ktaa-13a11",
      storageBucket: "ktaa-13a11.appspot.com",
      messagingSenderId: "873334685017"
    });

  }
  render() {

    const MainNavigator = TabNavigator({
      menu_scr: { screen: Menu_Screen },
      qr_scan: { screen: QrScan_Screen }
      // orders_screen: { screen: Orders_Screen },
      // settings_screen: { screen: Settings_Screen },
    },
      {
        navigationOptions: {
          headerLeft: null,
          headerStyle: {
            backgroundColor: 'white',
            elevation: 2,
            paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight + 10
          },
          headerTitleStyle: {
            fontSize: RkTheme.current.fonts.sizes.h5,
            alignSelf: 'center',
            marginBottom: Platform.OS === 'ios' ? 0 : 10,
            marginTop: Platform.OS === 'ios' ? 25 : 0
          }
        },
        tabBarOptions: {
          showLabel: false,
          showIcon: true,
          indicatorStyle: { backgroundColor: '#ffffff' },
          activeTintColor: RkTheme.current.colors.accent,
          inactiveTintColor: RkTheme.current.colors.text.hint,
          style: { backgroundColor: '#ffffff' },
        },
        cardStyle: {
          paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
        },
        swipeEnabled: false,
        tabBarPosition: 'bottom',
      })

    const LoginNavigator = StackNavigator({
      welcome_screen: { screen: Welcome_Screen },
      register_screen: { screen: Register_Screen },
      reset_screen: { screen: Reset_Screen },
      profile_screen: { screen: Profile_Screen },
      login_screen: { screen: Login_Screen },
      main_screen: { screen: MainNavigator },
      qr_scan: { screen: QrScan_Screen },
      settings_screen: { screen: Settings_Screen }
    },
      {
        navigationOptions: {
          tabBarVisible: false
        },
        swipeEnabled: false,
        lazy: true
      });

    return (
      <Provider store={this.store}>
        <View style={styles.container}>
          <LoginNavigator
            ref={navigatorRef => {
              NavigatorService.setContainer(navigatorRef);
            }} />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
